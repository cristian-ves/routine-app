import { isEqual, parseISO, startOfToday } from 'date-fns';
import { onLoadDays } from '../store';

export const getCurrentDay = () => {

	let currentDay;

	const days = JSON.parse(localStorage.getItem('days')) || [];

	days.forEach(day => {
		if (isEqual(parseISO(day.date), startOfToday()))
			currentDay = day;
	});

	if (currentDay == undefined) {
		currentDay = {
			id: startOfToday().getTime(),
			date: startOfToday(),
			tasks: [],
			objectives: [],
			events: []
		}

		days.push(currentDay);
		localStorage.setItem('days', JSON.stringify(days));

	}

	return currentDay;
}

export const updateCurrentDay = (newCurrentDay) => {

	let days = JSON.parse(localStorage.getItem('days')) || [];

	days = days.map(day => {
		if (day.id === newCurrentDay.id) {
			return newCurrentDay;
		}
		return day;
	})

	localStorage.setItem('days', JSON.stringify(days));

}