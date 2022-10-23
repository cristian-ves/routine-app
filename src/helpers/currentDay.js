import { fromUnixTime, isEqual, parseISO, startOfToday } from 'date-fns';
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';

import { getEnvVariables } from './getEnvVariables';
import { db } from '../firebase/firebase-config';

export const getCurrentDay = async id => {

	if (id) {

		const viteVar = getEnvVariables();

		const daysCollectionRef = collection(db, viteVar.MODE, id, 'days');

		const q = query(daysCollectionRef, where('date', '==', startOfToday()));
		const querySnapshot = await getDocs(q);

		let currentDay;

		if (!querySnapshot.empty) {
			currentDay = querySnapshot.docs[0].data();
			return {
				...currentDay,
				date: fromUnixTime(currentDay.date),
				events: currentDay.events.map(event => ({
					...event,
					time: fromUnixTime(event.time)
				}))

			};
		}

		currentDay = {
			date: startOfToday(),
			tasks: [],
			objectives: [],
			events: []
		}
		await addDoc(daysCollectionRef, currentDay);
		return currentDay;

	} else {

		const days = JSON.parse(localStorage.getItem('days')) || [];

		let currentDay;

		days.forEach(day => {
			if (isEqual(parseISO(day.date), startOfToday()))
				currentDay = day;
		});

		if (!currentDay) {
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