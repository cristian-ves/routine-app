import { useDispatch, useSelector } from 'react-redux';
import { onAddEvent, onDeleteEvent, onEditEvent, onLoadEvents } from '../../store';
import { useAuthStore, useUiStore } from '../';

export const useScheduleStore = () => {

	const dispatch = useDispatch();

	const events = useSelector(state => state.events);
	const { user } = useAuthStore();
	const { showMessage } = useUiStore();

	const editEvent = event => { //only in the state, the backend or local storage will the autoSave function do it in useListItemTask.js
		showMessage('schedule');
		dispatch(onEditEvent(event));
	}

	const deleteEvent = id => {
		if (user.uid) {
			//Todo: delete event from the backend
		} else {
			let storageEvents = JSON.parse(localStorage.getItem('events'));
			storageEvents = storageEvents.filter(storageEvent => storageEvent.id !== id);
			localStorage.setItem('events', JSON.stringify(storageEvents));
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
			let storageEvents = JSON.parse(localStorage.getItem('events'));
			(storageEvents === null)
				? storageEvents = [newEvent]
				: storageEvents.push(newEvent);
			localStorage.setItem('events', JSON.stringify(storageEvents));
		}
		dispatch(onAddEvent(newEvent));
	}

	const loadEvents = () => {

		let events;
		if (user.uid) {
			// Todo: Load events from backend
		} else {
			events = JSON.parse(localStorage.getItem('events'));
		}
		dispatch(onLoadEvents(events || []));

	}



	return {
		//* properties
		events,

		//*methods
		editEvent,
		deleteEvent,
		addEvent,
		loadEvents,

	}

}