import { memo, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router";

import { useObjectivesStore, useRenewDay, useScheduleStore, useTasksStore } from '../hooks';
import { History, Home, Navbar, Objectives, Schedule, Settings, Tasks, NavbarList } from '../routine'


export const DashboardRoutes = memo(() => {

	const { loadObjectives } = useObjectivesStore();
	const { loadEvents } = useScheduleStore();
	const { loadTasks } = useTasksStore();

	useEffect(() => {
		loadObjectives();
		loadEvents();
		loadTasks();
	}, []);

	useRenewDay();


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