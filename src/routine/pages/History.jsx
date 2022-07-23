import { HistoryBox } from '../';

export const History = () => {


	return (
		<>
			<h1>History</h1>
			{
				/* days.map(({ tasks, objectives, date }, i) => {
					const tasksDone = tasks.filter(task => task.done).length;
					const avrgProgress = Math.round(objectives.reduce((previousValue, currentValue) => previousValue.progress + currentValue.progress) / objectives.length);
					return (
						<HistoryBox
							avrgProgress={avrgProgress}
							date={date}
							tasksDone={tasksDone}
							totalTasks={tasks.length}
							key={i}
						/>
					)
				}) */
			}
		</>
	)
}
