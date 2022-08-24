
import { useEffect } from 'react';
import DatePicker from "react-datepicker";

import { useScheduleStore, useListItemEvent } from '../../hooks/';
import { List } from '../';

import "react-datepicker/dist/react-datepicker.css";

export const Schedule = () => {

	const { events, addEvent } = useScheduleStore();

	return (
		<List
			handleAddItem={addEvent}
			hook={useListItemEvent}
			list={events}
			title='Schedule'
			componentName='schedule'
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
	)
}
