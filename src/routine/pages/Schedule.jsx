
import { useEffect } from 'react';
import DatePicker from "react-datepicker";

import { useRoutineStore, useListItemEvent, useSave, useAuthStore, useAutoSave } from '../../hooks/';
import { List } from '../components/List';

import "react-datepicker/dist/react-datepicker.css";

export const Schedule = () => {

	const { handleSaveEvents } = useSave();
	const { events, addEvent, loadEvents } = useRoutineStore();
	const { user } = useAuthStore();
	const { uid } = user;


	useEffect(() => {
		//Todo: load files propertly
		if (!uid) {
			const events = JSON.parse(localStorage.getItem('events'));
			Array.isArray(events) && loadEvents(events)
		} else {
			//load events from backend
		}
	}, [])

	const handleAddEvent = () => {
		const id = new Date().getTime();
		addEvent({
			name: '',
			time: id,
			id
		});
	}


	return (
		<>
			<List
				handleAddItem={handleAddEvent}
				hook={useListItemEvent}
				list={events}
				title='Schedule'
				save={handleSaveEvents}
			>
				{(change, value) => {
					return (
						<DatePicker
							dateFormat="h:mm aa"
							onChange={change}
							selected={value}
							showTimeSelect
							showTimeSelectOnly
							timeCaption="Time"
							timeIntervals={15}
						/>
					)
				}}
			</List>
		</>
	)
}
