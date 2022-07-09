import { useDispatch, useSelector } from 'react-redux'
import { onAddEvent, onAddTask, onAddObjective, onAddDay, onEditEvent } from '../store';


export const useRoutineStore = () => {

	const dispatch = useDispatch();

	const { events, tasks, objectives, days } = useSelector(state => state.routine);

	const addEvent = event => dispatch(onAddEvent(event));
	const addTask = task => dispatch(onAddTask(task));
	const addObjective = objective => dispatch(onAddObjective(objective));
	const addDay = day => dispatch(onAddDay(day));
	const editEvent = payload => dispatch(onEditEvent(payload));

	return {
		//* properties
		events,
		tasks,
		objectives,
		days,

		//* methods
		addEvent,
		addTask,
		addObjective,
		addDay,

		editEvent
	}
}