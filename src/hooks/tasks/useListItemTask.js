import { useTasksStore, useAuthStore } from '..';
import { getCurrentDay, updateCurrentDay } from '../../helpers';

export const useListItemTask = (task) => {

	const { editTask, deleteTask } = useTasksStore();
	const { user } = useAuthStore();

	const handleInputChange = ({ target }) => {
		editTask({
			name: target.value,
			done: task.done,
			id: task.id
		});
	}


	const handleCheckboxChange = () => {
		editTask({
			name: task.name,
			done: !task.done,
			id: task.id
		});
	}

	const autoSave = (task) => {
		if (user.uid) {
			//Save task in backend
		} else {
			// update localStorage task

			let currentDay = getCurrentDay();
			const tasks = currentDay.tasks.map(storageTask => (
				(task.id === storageTask.id) ? task : storageTask
			));

			currentDay.tasks = tasks;
			updateCurrentDay(currentDay);
		}
	}

	return [
		handleInputChange,
		handleCheckboxChange,
		deleteTask,
		task.done,
		autoSave
	]
}