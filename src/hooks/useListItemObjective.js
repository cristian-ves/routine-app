import { useRoutineStore } from './';

export const useListItemObjective = (objective) => {
	const { editObjective, deleteObjective } = useRoutineStore();

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

	return [
		handleInputChange,
		handleCheckboxChange,
		deleteObjective,
		objective.progress
	]
}