import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getDay, getHours, getMinutes, hoursToMilliseconds, isBefore, sub } from 'date-fns';

import SpinnerStyles from '../../styles/components/Spinner.module.css';

import { HistoryBox } from '../';
import { Spinner } from '../../auth';
import { onLoadDays } from '../../store';
import { isAfter } from 'date-fns/esm';

export const History = () => {

	const dispatch = useDispatch();
	const { history } = useSelector(state => state.days);

	const [isLoading, setIsLoading] = useState(true);

	const loadDays = () => {
		//Todo: load from backend and from storage
	}

	useEffect(() => {
		//Todo: load all days from backendo or local storage
		setIsLoading(false);



	}, []);

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
				history
					.filter(({ data }) => (data.tasks.length > 0 || data.objectives.length > 0 || data.eventslength > 0))
					.map(({ data, date }, i) => {

						const { tasks, objectives } = data;

						const tasksDone = tasks.filter(task => task.done).length;

						let totalProgress = 0;
						objectives.forEach((objective) => {
							totalProgress += objective.progress;
						})
						const avrgProgress = Math.round(totalProgress / objectives.length)

						return (
							<HistoryBox
								avrgProgress={avrgProgress || 0}
								date={date}
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
