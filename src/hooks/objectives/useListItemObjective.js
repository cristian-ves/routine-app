import { useObjectivesStore, useAuthStore } from '..';
import { getCurrentDay, updateCurrentDay } from '../../helpers';

export const useListItemObjective = (objective) => {

	const { editObjective, deleteObjective } = useObjectivesStore();
	const { user } = useAuthStore();

	const handleInputChange = ({ target }) => {
		editObjective({
			name: target.value,
			progress: objective.progress,
			id: objective.id
		});
	}

	const handleCheckboxChange = (e, newValue) => {
		editObjective({
			name: objective.name,
			progress: newValue,
			id: objective.id
		});
	}


	const autoSave = (objective) => {
		if (user.uid) {
			//Todo: Update task in backend
		} else {
			// update localStorage task

			let currentDay = getCurrentDay();
			const objectives = currentDay.objectives.map(storageObjective => (
				(objective.id === storageObjective.id) ? objective : storageObjective
			));

			currentDay.objectives = objectives;

			updateCurrentDay(currentDay);
		}
	}

	return [
		handleInputChange,
		handleCheckboxChange,
		deleteObjective,
		objective.progress,
		autoSave
	]
}