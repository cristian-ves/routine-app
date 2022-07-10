
import { useRoutineStore, useListItemTask } from '../../hooks';
import { ListItem } from '../';

export const Tasks = () => {

	const { tasks, addTask } = useRoutineStore();

	const handleAddEvent = () => {
		addTask({
			name: '',
			done: false,
			id: new Date().getTime()
		});
	}

	return (
		<>
			<h1>Tasks</h1>
			<ul>

				{
					tasks.map((task, i) => {
						return (
							<ListItem
								event={task}
								useList={useListItemTask}
								key={i}
							>
								{
									(change, value) =>
									(
										<input
											type="checkbox"
											onChange={change}
											checked={value}
										/>
									)
								}
							</ListItem>
						)
					})
				}

			</ul>

			<button
				onClick={handleAddEvent}
			>
				<i className="fa-solid fa-plus"></i>
			</button>

		</>
	)
}
