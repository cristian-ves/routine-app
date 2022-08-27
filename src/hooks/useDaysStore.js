import { useDispatch } from 'react-redux';

import { onLoadDays, onLoadEvents, onLoadObjectives, onLoadTasks } from '../store';
import { useAuthStore } from './useAuthStore';
import { getCurrentDay } from '../helpers';

export const useDaysStore = () => {

	const dispatch = useDispatch();

	const { user } = useAuthStore();

	const loadAll = () => {
		if (user.uid) { //Todo: load from backend

		} else {
			const days = JSON.parse(localStorage.getItem('days')) || [];
			loadDays(days);
		}

		const currentDay = getCurrentDay();

		dispatch(onLoadEvents(currentDay.events));
		dispatch(onLoadObjectives(currentDay.objectives));
		dispatch(onLoadTasks(currentDay.tasks));

	}

	const loadDays = (days) => {
		dispatch(onLoadDays(days));
	}


	return {
		loadAll,
		loadDays
	}
}
