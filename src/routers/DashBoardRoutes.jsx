import { startOfToday, startOfYesterday } from 'date-fns';
import { memo, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router";

import { useDaysStore, useObjectivesStore, useRenewDay, useScheduleStore, useTasksStore } from '../hooks';
import { History, Home, Navbar, Objectives, Schedule, Settings, Tasks, NavbarList } from '../routine'


export const DashboardRoutes = memo(() => {

	//TODO: Load data by date

	const { loadDays } = useDaysStore();

	useEffect(() => {
		loadDays();

		/* const days = JSON.parse(localStorage.getItem('days')) || [];


		if (days.length == 0) {

			days.push({
				id: startOfToday().getTime(),
				date: startOfToday(),
				tasks: [],
				objectives: [],
				events: [
					{
						name: "here we are don't turn away now",
						time: new Date().getTime(),
						id: new Date().getTime()
					},
					{
						name: "Just a man and his will to survive",
						time: new Date().getTime(),
						id: new Date().getTime()

					}
				]
			}),

				days.push({
					id: startOfYesterday().getTime(),
					date: startOfYesterday(),
					tasks: [],
					objectives: [],
					events: [
						{
							name: "here we are don't turn away now",
							time: new Date().getTime(),
							id: new Date().getTime()
						},
						{
							name: "Just a man and his will to survive",
							time: new Date().getTime(),
							id: new Date().getTime()

						}
					]
				})
		}

		localStorage.setItem('days', JSON.stringify(days)); */

	}, [])


	return (
		<header>
			<Navbar />
			<NavbarList />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/schedule' element={<Schedule />} />
				<Route path='/tasks' element={<Tasks />} />
				<Route path='/objectives' element={<Objectives />} />
				<Route path='/history' element={<History />} />
				<Route path='/settings' element={<Settings />} />
				<Route path="/*" element={<Navigate to="/" replace />} />
			</Routes>

		</header>
	)
})