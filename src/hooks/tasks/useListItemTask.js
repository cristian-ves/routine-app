import { useTasksStore, useAuthStore } from '..';

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
			let storageTasks = JSON.parse(localStorage.getItem('tasks')) || [];
			storageTasks = storageTasks.map(storageTask => (
				(storageTask.id == task.id) ? task : storageTask
			));
			localStorage.setItem('tasks', JSON.stringify(storageTasks));
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