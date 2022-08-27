import { useDispatch, useSelector } from 'react-redux';
import { onAddEvent, onDeleteEvent, onEditEvent, onLoadEvents } from '../../store';
import { useAuthStore, useUiStore } from '../';
import { getCurrentDay, updateCurrentDay } from '../../helpers';

export const useScheduleStore = () => {

	const dispatch = useDispatch();

	const events = useSelector(state => state.events);
	const { user } = useAuthStore();
	const { showMessage, clearMessage } = useUiStore();

	const editEvent = event => { //only in the state, the backend or local storage will the autoSave function do it in useListItemTask.js
		showMessage('schedule');
		dispatch(onEditEvent(event));
	}

	const deleteEvent = id => {
		if (user.uid) {
			//Todo: delete event from the backend
		} else {
			const currentDay = getCurrentDay();
			currentDay.events = currentDay.events.filter(storageEvent => storageEvent.id !== id);

			updateCurrentDay(currentDay);
		}
		dispatch(onDeleteEvent(id));
	}

	const addEvent = () => {

		let newEvent;
		if (user.uid) {
			// Todo: Add event from the backend
		} else {
			const id = new Date().getTime();
			newEvent = {
				name: '',
				time: id,
				id
			};
			const currentDay = getCurrentDay();
			currentDay.events.push(newEvent);

			updateCurrentDay(currentDay);

		}

		dispatch(onAddEvent(newEvent));
	}



	return {
		//* properties
		events,

		//*methods
		editEvent,
		deleteEvent,
		addEvent

	}

}