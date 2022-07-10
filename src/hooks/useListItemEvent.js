import { useRoutineStore } from './';


export const useListItemEvent = (event) => {
	const { editEvent, deleteEvent } = useRoutineStore();

	const handleInputChange = ({ target }) => {
		editEvent({
			name: target.value,
			time: event.time,
			id: event.id
		});
	}

	const handleDatePickerChange = (date) => {
		editEvent({
			name: event.name,
			time: Date.parse(date),
			id: event.id
		});
	}

	return [
		handleInputChange,
		handleDatePickerChange,
		deleteEvent,
		event.time
	]
}
