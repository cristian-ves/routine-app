import { memo } from 'react';
import { Route, Routes, Navigate } from "react-router";

import { History, Home, Navbar, Objectives, Schedule, Settings, Tasks } from '../routine'
import { NavbarList } from '../routine/components/NavbarList'


export const DashboardRoutes = memo(() => {

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