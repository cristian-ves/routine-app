import { useDispatch } from 'react-redux';

import { onLoadDays, onLoadEvents, onLoadObjectives, onLoadTasks } from '../store';
import { useAuthStore } from './useAuthStore';
import { getCurrentDay } from '../helpers';
import { differenceInMilliseconds, startOfTomorrow } from 'date-fns';

export const useDaysStore = () => {

	const dispatch = useDispatch();
	const { user } = useAuthStore();

	const loadAll = async () => {

		startCronometerForTomorrow();

		let currentDay = await getCurrentDay(user.uid);

		dispatch(onLoadEvents(currentDay.events));
		dispatch(onLoadObjectives(currentDay.objectives));
		dispatch(onLoadTasks(currentDay.tasks));

	}

	const loadDays = (setIsLoading) => {
		if (user.uid) { //Todo: load from backend

		} else {
			const days = JSON.parse(localStorage.getItem('days')) || [];
			dispatch(onLoadDays(days));
		}
		setIsLoading(false); // finish loading
	}


	const startCronometerForTomorrow = () => {

		const timeToStartRenewDayMS = differenceInMilliseconds(startOfTomorrow(), new Date());

		setTimeout(() => { // A timeout that runs at 12:00 am to change the day
			loadAll();
		}, timeToStartRenewDayMS);
	}

	return {
		loadAll,
		loadDays,
		startCronometerForTomorrow
	}
}
