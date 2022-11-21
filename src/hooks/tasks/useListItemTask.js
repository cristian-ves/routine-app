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

	const autoSave = async (task) => {

		let currentDay = await getCurrentDay(user.uid);
		const tasks = currentDay.tasks.map(dbTask => (
			(task.id === dbTask.id) ? task : dbTask
		));
		currentDay.tasks = tasks;

		updateCurrentDay(currentDay, user.uid);

	}

	return [
		handleInputChange,
		handleCheckboxChange,
		deleteTask,
		task.done,
		autoSave
	]
}