
import DatePicker from "react-datepicker";

import { ListItemEvent } from '../';
import { useRoutineStore, useListItemEvent } from '../../hooks/';

import "react-datepicker/dist/react-datepicker.css";

export const Schedule = () => {

	const { events, addEvent } = useRoutineStore();

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
			<h1>Schedule</h1>
			<span>at time</span>
			<ul>

				{
					events.map((event, i) => {

						return (
							<ListItemEvent
								event={event}
								key={i}
								useList={useListItemEvent}
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
							</ListItemEvent>
						)
					})
				}

			</ul>
			<button
				onClick={handleAddEvent}
			>
				<i className="fa-solid fa-plus"></i>
			</button>
		</>
	)
}
