import { useDispatch, useSelector } from 'react-redux';
import { onAddTask, onDeleteTask, onEditTask, onLoadTasks } from '../../store';
import { useAuthStore, useUiStore } from '../';

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
			let storageTasks = JSON.parse(localStorage.getItem('tasks'));
			storageTasks = storageTasks.filter(storageTask => storageTask.id !== id);
			localStorage.setItem('tasks', JSON.stringify(storageTasks));
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
			let storageTasks = JSON.parse(localStorage.getItem('tasks'));
			(storageTasks === null)
				? storageTasks = [newTask]
				: storageTasks.push(newTask);
			localStorage.setItem('tasks', JSON.stringify(storageTasks));
		}
		dispatch(onAddTask(newTask));
	}

	const loadTasks = () => {

		let tasks;
		if (user.uid) {
			// Todo: Load tasks from backend
		} else {
			tasks = JSON.parse(localStorage.getItem('tasks'));
		}
		dispatch(onLoadTasks(tasks || []));

	}



	return {
		//* properties
		tasks,

		//*methods
		editTask,
		deleteTask,
		addTask,
		loadTasks,

	}

}
