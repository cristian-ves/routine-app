
import { useEffect } from 'react';

import { useRoutineStore, useListItemTask, useUserStore, useSave } from '../../hooks';
import { List } from './List';

export const Tasks = () => {

	const { tasks, addTask, loadTasks } = useRoutineStore();
	const { uid } = useUserStore();
	const { handleSaveTasks } = useSave();

	useEffect(() => {
		if (!uid) {
			const tasks = JSON.parse(localStorage.getItem('tasks'));
			Array.isArray(tasks) && loadTasks(tasks);
		} else {
			//load tasks from backend
		}
	}, [])

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
				save={handleSaveTasks}
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
