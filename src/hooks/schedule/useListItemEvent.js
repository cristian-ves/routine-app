import { useScheduleStore, useAuthStore } from '..';
import { getCurrentDay, updateEventsCurrentDay } from '../../helpers';

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
			//Update task in backendanima
		} else {
			// update localStorage task
			let currentDay = getCurrentDay();
			const events = currentDay.events.map(storageEvent => (
				(event.id === storageEvent.id) ? event : storageEvent
			));

			currentDay.events = events;

			updateEventsCurrentDay(currentDay);
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