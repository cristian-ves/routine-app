import { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useform'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useRoutineStore } from '../../hooks/useRoutineStore';

export const ListItem = ({ event }) => {

	const { id } = event;
	const { editEvent, deleteEvent } = useRoutineStore();

	const [formValues, handleInputChange] = useForm({
		name: event.name
	});
	const { name } = formValues;

	const [time, setTime] = useState(event.time);

	useEffect(() => {

		editEvent({
			time: (typeof time === 'number') ? time : Date.parse(time),
			name,
			id
		});

	}, [time, name, id]);


	return (
		<li>
			<input
				name="name"
				onChange={handleInputChange}
				type="text"
				value={name}
			/>
			<DatePicker
				dateFormat="h:mm aa"
				onChange={date => setTime(date)}
				selected={time}
				showTimeSelect
				showTimeSelectOnly
				timeCaption="Time"
				timeIntervals={15}

			/>
			<button
				onClick={
					() => deleteEvent(id)
				}
			>
				<i className="fa-solid fa-trash-can"></i>
			</button>
		</li>
	)
}
