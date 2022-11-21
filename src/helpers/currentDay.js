import { fromUnixTime, isEqual, parseISO, startOfToday } from 'date-fns';
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';

import { getEnvVariables } from './getEnvVariables';
import { db } from '../firebase/firebase-config';

export const getCurrentDay = async id => {

	if (id) {

		const viteVar = getEnvVariables();
		const daysCollectionRef = collection(db, viteVar.MODE, id, 'days');
		const startOfTodayMs = String(startOfToday().getTime());
		const docRef = doc(daysCollectionRef, startOfTodayMs);

		const currentDaySnap = await getDoc(docRef);

		if (currentDaySnap.exists()) return currentDaySnap.data();

		const currentDay = {
			date: startOfToday(),
			tasks: [],
			objectives: [],
			events: []
		}
		await setDoc(docRef, currentDay);
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

export const updateCurrentDay = async (newCurrentDay, id) => {

	if (id) {

		const viteVar = getEnvVariables();
		const docRef = doc(db, viteVar.MODE, id, 'days', String(startOfToday().getTime()));


		setDoc(docRef, newCurrentDay, { merge: true })

	} else {

		let days = JSON.parse(localStorage.getItem('days')) || [];

		days = days.map(day => {
			if (day.id === newCurrentDay.id) {
				return newCurrentDay;
			}
			return day;
		})

		localStorage.setItem('days', JSON.stringify(days));
	}

}