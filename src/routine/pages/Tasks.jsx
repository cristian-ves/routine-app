
import { ListItem } from '../';
import { useRoutineStore } from '../../hooks/useRoutineStore';

export const Tasks = () => {

	const { tasks } = useRoutineStore();

	return (
		<>
			<h1>Tasks</h1>

			{
				tasks.map(({ name, done }, i) => {
					return (
						<ListItem
							text={name}
							component={
								<input
									type="checkbox"
									defaultChecked={done}
								/>}
							key={i}
						/>
					)
				})
			}
			<i className="fa-solid fa-plus"></i>
		</>
	)
}
