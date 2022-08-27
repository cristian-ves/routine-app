import { useDispatch, useSelector } from 'react-redux';
import { onAddTask, onDeleteTask, onEditTask, onLoadTasks } from '../../store';
import { useAuthStore, useUiStore } from '../';
import { getCurrentDay, updateCurrentDay } from '../../helpers';

export const useTasksStore = () => {

	const dispatch = useDispatch();

	const tasks = useSelector(state => state.tasks);
	const { user } = useAuthStore();
	const { showMessage } = useUiStore();

	const editTask = task => { //only in the state, the backend or local storage will the autoSave function do it in useListItemTask.js
		showMessage('tasks');
		dispatch(onEditTask(task));
	}

	const deleteTask = id => {
		if (user.uid) {
			//Todo: delete task from the backend
		} else {
			const currentDay = getCurrentDay();
			currentDay.tasks = currentDay.tasks.filter(storageTasks => storageTasks.id !== id);

			updateCurrentDay(currentDay);

		}
		dispatch(onDeleteTask(id));
	}

	const addTask = () => {

		let newTask;
		if (user.uid) {
			// Todo: Add task from the backend
		} else {
			newTask = {
				name: '',
				done: false,
				id: new Date().getTime()
			};

			const currentDay = getCurrentDay();
			currentDay.tasks.push(newTask);

			updateCurrentDay(currentDay);
		}
		dispatch(onAddTask(newTask));
	}



	return {
		//* properties
		tasks,

		//*methods
		editTask,
		deleteTask,
		addTask,

	}

}
