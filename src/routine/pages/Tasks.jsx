
import { useEffect } from 'react';

import { useTasksStore, useListItemTask } from '../../hooks';
import { List } from '../';

export const Tasks = () => {

	const { tasks, addTask, loadTasks } = useTasksStore();

	useEffect(() => {
		loadTasks();
	}, []);



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
