import { useDispatch, useSelector } from 'react-redux'
import { onAddEvent, onAddTask, onAddObjective, onAddDay, onEditEvent, onDeleteEvent, onEditTask, onDeleteTask, onEditObjective, onDeleteObjective, onLoadEvents, onLoadTasks, onLoadObjectives } from '../store';


export const useRoutineStore = () => {

	const dispatch = useDispatch();

	const { events, /* tasks, */ objectives, days } = useSelector(state => state.routine);

	const addEvent = event => dispatch(onAddEvent(event));
	const addTask = task => dispatch(onAddTask(task));
	const addObjective = objective => dispatch(onAddObjective(objective));
	const addDay = day => dispatch(onAddDay(day));

	const editEvent = event => dispatch(onEditEvent(event));
	const editTask = task => dispatch(onEditTask(task));
	const editObjective = objective => dispatch(onEditObjective(objective));

	const deleteEvent = id => dispatch(onDeleteEvent(id));
	const deleteTask = id => dispatch(onDeleteTask(id));
	const deleteObjective = id => dispatch(onDeleteObjective(id));

	const loadEvents = events => dispatch(onLoadEvents(events));
	const loadTasks = events => dispatch(onLoadTasks(events));
	const loadObjectives = events => dispatch(onLoadObjectives(events));



	return {
		//* properties
		events,
		tasks,
		objectives,
		days,

		//* methods
		addEvent,
		// addTask,
		addObjective,
		addDay,

		editEvent,
		// editTask,
		editObjective,

		deleteEvent,
		// deleteTask,
		deleteObjective,

		loadEvents,
		// loadTasks,
		loadObjectives

	}
}