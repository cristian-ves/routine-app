import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { parseISO } from 'date-fns';

import SpinnerStyles from '../../styles/components/Spinner.module.css';

import { HistoryBox } from '../';
import { useDaysStore } from '../../hooks';

export const History = () => {

	const { days } = useSelector(state => state.days);
	const { loadDays } = useDaysStore();

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		loadDays(setIsLoading);

	}, [])


	if (isLoading) return (
		<div>
			<i className={"fa-solid fa-spinner " + SpinnerStyles.upper}></i>
			<p>Loading days...</p>
		</div>
	)

	return (
		<>
			<h1>History</h1>
			{
				days
					.filter(day => (day.tasks.length > 0 || day.objectives.length > 0 || day.events.length > 0))
					.map(({ tasks, objectives, date }, i) => {

						const tasksDone = tasks.filter(task => task.done).length;

						let totalProgress = 0;
						objectives.forEach((objective) => {
							totalProgress += objective.progress;
						})
						const avrgProgress = Math.round(totalProgress / objectives.length)

						return (
							<HistoryBox
								avrgProgress={avrgProgress || 0}
								date={parseISO(date)}
								tasksDone={tasksDone}
								totalTasks={tasks.length}
								key={i}
							/>
						)
					})
			}
		</>
	)
}
