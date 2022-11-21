
import { useTasksStore, useListItemTask } from '../../hooks';
import { List } from '../';

export const Tasks = () => {

	const { tasks, addTask } = useTasksStore();

	return (
		<List
			handleAddItem={addTask}
			hook={useListItemTask}
			list={tasks}
			title='Tasks'
			componentName='tasks'
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
		</List >
	)
}
