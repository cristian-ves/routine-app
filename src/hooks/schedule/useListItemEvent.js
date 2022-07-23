import { useScheduleStore, useAuthStore } from '..';

export const useListItemEvent = (event) => {

	const { editEvent, deleteEvent } = useScheduleStore();
	const { user } = useAuthStore();

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

	const autoSave = (event) => {
		if (user.uid) {
			//Update task in backend
		} else {
			// update localStorage task
			let storageEvents = JSON.parse(localStorage.getItem('events'));
			storageEvents = storageEvents.map(storageEvent => (
				(storageEvent.id == event.id) ? event : storageEvent
			));
			localStorage.setItem('events', JSON.stringify(storageEvents));
		}
	}

	return [
		handleInputChange,
		handleDatePickerChange,
		deleteEvent,
		event.time,
		autoSave
	]
}