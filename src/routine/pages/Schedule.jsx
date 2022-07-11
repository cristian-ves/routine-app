
import DatePicker from "react-datepicker";

import { useRoutineStore, useListItemEvent } from '../../hooks/';
import { List } from './List';

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
			<List
				handleAddItem={handleAddEvent}
				hook={useListItemEvent}
				list={events}
				title='Schedule'
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
