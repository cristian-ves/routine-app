
import { ListItem } from '../';
import { useRoutineStore } from '../../hooks/useRoutineStore';


export const Schedule = () => {

	const { events } = useRoutineStore();


	return (
		<>
			<h1>Schedule</h1>
			<span>at time</span>
			<ul>

				{
					events.map((event, i) => {

						return (
							<ListItem
								event={event}
								/* component={
									<DatePicker
										// onChange={(date) => setStartDate(date)}
										dateFormat="h:mm aa"
										disabled
										selected={time}
										showTimeSelect
										showTimeSelectOnly
										timeCaption="Time"
										timeIntervals={15}
									/>
								} */
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
