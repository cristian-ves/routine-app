import { format } from 'date-fns';

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
					events.map(({ name, time }, i) => {
						return (
							<ListItem
								text={name}
								component={<p>{format(time, 'p')}</p>}
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
