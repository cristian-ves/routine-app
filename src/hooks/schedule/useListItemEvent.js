import { useScheduleStore, useAuthStore } from '..';
import { getCurrentDay, updateCurrentDay } from '../../helpers';

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

	const autoSave = async (event) => {

		let currentDay = await getCurrentDay(user.uid);
		const events = currentDay.events.map(dbEvent => (
			(event.id === dbEvent.id) ? event : dbEvent
		));
		currentDay.events = events;

		updateCurrentDay(currentDay, user.uid);

	}

	return [
		handleInputChange,
		handleDatePickerChange, //onChildrenChange
		deleteEvent,
		event.time, //childrenValue
		autoSave
	]
}
