import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'lodash';
import { getMinutes, hoursToMilliseconds, startOfTomorrow, isAfter, format, getMilliseconds, getSeconds, addMilliseconds, isEqual, startOfToday } from 'date-fns';

import { useAuthStore } from './';
import { onAddDay, onLoadDays, onLoadEvents, onLoadObjectives, onLoadTasks, onUpdateDay } from '../store';

export const useRenewDay = () => {

	const dispatch = useDispatch();

	const state = useSelector(state => state);
	const { objectives, tasks, events, days } = state;
	const { user } = useAuthStore();

	const [areDaysLoad, setareDaysLoad] = useState(false);

	const createDay = (day) => {

		const history = JSON.parse(localStorage.getItem('history')) || [];
		history.push(day);
		localStorage.setItem('history', JSON.stringify(history));
		dispatch(onAddDay(day));

	}

	const cleanAll = () => {

		if (user.uid) {
			// Todo: Clean all from the backend, add a new day and set current id
		} else {
			localStorage.removeItem('tasks');
			localStorage.removeItem('events');
			localStorage.removeItem('objectives');

			createDay({
				id: startOfToday().getTime(),
				data: {
					tasks: [],
					objectives: [],
					events: []
				},
				date: startOfToday()
			})
		}
		dispatch(onLoadTasks([]));
		dispatch(onLoadEvents([]));
		dispatch(onLoadObjectives([]));

	}

	const loadDays = () => {
		if (user.uid) { //Todo: load from backend

		} else {
			const history = JSON.parse(localStorage.getItem('history')) || [];
			dispatch(onLoadDays(history));
			setareDaysLoad(true);
		}
	}


	const currentDate = new Date();
	const timeElapsedMS = getMilliseconds(currentDate) + getSeconds(currentDate) * 1000 + getMinutes(currentDate) * 60 * 1000;
	const timeToStartRenewDayMS = hoursToMilliseconds(1) - timeElapsedMS;
	let tomorrowDate = startOfTomorrow();

	useEffect(() => { // On render

		loadDays();

		setTimeout(() => { // check every hour if it's a new day
			renewDay(currentDate, tomorrowDate, cleanAll);
			setInterval(() => {
				renewDay(currentDate, tomorrowDate, cleanAll); // check if its a new day
				tomorrowDate = startOfTomorrow();
			}, hoursToMilliseconds(1));
		}, timeToStartRenewDayMS);
	}, []);

	/* useEffect(() => {

		console.log(days.history.length, areDaysLoad)
		if (days.history.length > 0 && areDaysLoad) {
			setareDaysLoad(false);
			saveDay(state);
			console.log('saving on load', areDaysLoad)
		}
		// if (days.history.length > 0 && areDaysLoad) {
		// 	setareDaysLoad(false);
		// }

	}, [days.history]) */


	const renewDay = (currentDate, tomorrowDate) => {
		if (
			(isEqual(currentDate, tomorrowDate)) // now it's 00:00
			|| (isAfter(currentDate, tomorrowDate)) //it's 00:01 or later
		) {
			//it's a new day
			cleanAll();
		}
	}

	useEffect(() => {
		debouncedSave(state);
	}, [tasks, objectives, events]);


	const debouncedSave = useCallback(
		debounce(async (state) => {
			saveDay(state);
		}, 500),
		[]
	);

	const saveDay = ({ objectives, tasks, events, days }) => {
		if (user.uid) {
			//Todo: Add new day in the backend
		} else {
			// Create or update a day in the store

			const day = {
				id: startOfToday().getTime(),
				data: {
					tasks,
					objectives,
					events
				},
				date: startOfToday()
			}

			if (days.history.some(historyDay => historyDay.id === day.id)) { //  if current day already exists
				// update
				let history = JSON.parse(localStorage.getItem('history')) || [];
				history = history.map(historyDay =>
					(historyDay.id === day.id) ? day : historyDay
				)
				localStorage.setItem('history', JSON.stringify(history));
				dispatch(onUpdateDay(day));

			} else {
				// create
				cleanAll();
				createDay(day);
			}
		}

	}


}