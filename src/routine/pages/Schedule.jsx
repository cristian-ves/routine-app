import { format } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ListItem } from '../';
import { useRoutineStore } from '../../hooks/useRoutineStore';


export const Schedule = () => {

	const { events, editEvent } = useRoutineStore();

	return (
		<>
			<h1>Schedule</h1>
			<span>at time</span>
			<ul>

				{
					events.map(({ name, time }, i) => {
						name = 'hola'
						return (
							<ListItem
								text={name}
								component={<DatePicker
									selected={time}
									// onChange={(date) => setStartDate(date)}
									showTimeSelect
									showTimeSelectOnly
									timeIntervals={0}
									timeCaption="Time"
									dateFormat="h:mm aa"
								/>}
								onEdit={(event) => editEvent({
									i,
									event
								})}
								key={i}
							/>
						)
					})
				}

			</ul>
			<i className="fa-solid fa-plus"></i>
		</>
	)
}
