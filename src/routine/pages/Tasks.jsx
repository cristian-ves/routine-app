
import { useRoutineStore, useListItemTask } from '../../hooks';
import { List } from './List';

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
			<List
				handleAddItem={handleAddEvent}
				hook={useListItemTask}
				list={tasks}
				title='Tasks'

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
			</List>
		</>
	)
}
