import { isEqual, parseISO, startOfToday } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import { onLoadDays, onLoadEvents, onLoadObjectives, onLoadTasks } from '../store';
import { useAuthStore } from './useAuthStore';
import { getCurrentDay } from '../helpers';

export const useDaysStore = () => {

	const dispatch = useDispatch();

	const { objectives, tasks, events, days } = useSelector(state => state);
	const { user } = useAuthStore();

	const loadDays = () => {
		if (user.uid) { //Todo: load from backend

		} else {
			const days = JSON.parse(localStorage.getItem('days')) || [];
			dispatch(onLoadDays(days));
		}

		const currentDay = getCurrentDay();

		dispatch(onLoadEvents(currentDay.events));
		dispatch(onLoadObjectives(currentDay.objectives));
		dispatch(onLoadTasks(currentDay.tasks));

	}

	return {
		loadDays
	}
}
