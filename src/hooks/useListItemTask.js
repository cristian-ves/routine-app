import { useRoutineStore } from './';

export const useListItemTask = (task) => {
	const { editTask, deleteTask } = useRoutineStore();

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

	return [
		handleInputChange,
		handleCheckboxChange,
		deleteTask,
		task.done
	]
}