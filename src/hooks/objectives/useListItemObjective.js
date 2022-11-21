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


	const autoSave = async (objective) => {

		let currentDay = await getCurrentDay(user.uid);
		const objectives = currentDay.objectives.map(dbObjective => (
			(objective.id === dbObjective.id) ? objective : dbObjective
		));
		currentDay.objectives = objectives;

		updateCurrentDay(currentDay, user.uid);

	}

	return [
		handleInputChange,
		handleCheckboxChange,
		deleteObjective,
		objective.progress,
		autoSave
	]
}