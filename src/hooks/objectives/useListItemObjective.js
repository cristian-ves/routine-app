import { useObjectivesStore, useAuthStore } from '..';

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
			let storageObjectives = JSON.parse(localStorage.getItem('objectives')) || [];
			storageObjectives = storageObjectives.map(storageObjective => (
				(storageObjective.id == objective.id) ? objective : storageObjective
			));
			localStorage.setItem('objectives', JSON.stringify(storageObjectives));
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