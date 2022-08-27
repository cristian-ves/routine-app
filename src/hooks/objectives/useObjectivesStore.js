
import { useDispatch, useSelector } from 'react-redux';
import { onAddObjective, onDeleteObjective, onEditObjective, onLoadObjectives } from '../../store';
import { useAuthStore, useUiStore } from '../';
import { getCurrentDay, updateCurrentDay } from '../../helpers';

export const useObjectivesStore = () => {

	const dispatch = useDispatch();

	const objectives = useSelector(state => state.objectives);
	const { user } = useAuthStore();
	const { showMessage } = useUiStore();

	const editObjective = objective => { //only in the state, the backend or local storage will the autoSave function do it in useListItemTask.js
		showMessage('objectives');
		dispatch(onEditObjective(objective));
	}

	const deleteObjective = id => {
		if (user.uid) {
			//Todo: delete objective from the backend
		} else {
			const currentDay = getCurrentDay();
			currentDay.objectives = currentDay.objectives.
				filter(storageObjective => storageObjective.id !== id);

			updateCurrentDay(currentDay);
		}
		dispatch(onDeleteObjective(id));
	}

	const addObjective = () => {
		let newObjective;
		if (user.uid) {
			// Todo: Add objective from the backend
		} else {

			newObjective = {
				name: '',
				progress: 50,
				id: new Date().getTime()
			};
			const currentDay = getCurrentDay();
			currentDay.objectives.push(newObjective);

			updateCurrentDay(currentDay);

		}
		dispatch(onAddObjective(newObjective));
	}

	const loadObjectives = () => {

		let objectives;
		if (user.uid) {
			// Todo: Load objectives from backend
		} else {
			objectives = JSON.parse(localStorage.getItem('objectives'));
		}
		dispatch(onLoadObjectives(objectives || []));

	}



	return {
		//* properties
		objectives,

		//*methods
		addObjective,
		deleteObjective,
		editObjective,
		loadObjectives,

	}

}
