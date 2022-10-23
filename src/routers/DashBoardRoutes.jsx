import { memo, useEffect, useState } from 'react';
import { Route, Routes, Navigate } from "react-router";
import { Spinner } from '../auth';

import { useDaysStore } from '../hooks';
import { History, Home, Navbar, Objectives, Schedule, Settings, Tasks, NavbarList } from '../routine'


export const DashboardRoutes = memo(() => {

	const { loadAll } = useDaysStore();

	const [isAllLoaded, setIsAllLoaded] = useState(false);

	useEffect(() => {// wait until everything is loaded to remove the spinner

		const load = async () => {
			await loadAll();
			setIsAllLoaded(true);
		}

		load();

	}, [])



	return isAllLoaded ?
		(
			<>
				<header>
					<Navbar />
					<NavbarList />
				</header>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/schedule' element={<Schedule />} />
					<Route path='/tasks' element={<Tasks />} />
					<Route path='/objectives' element={<Objectives />} />
					<Route path='/history' element={<History />} />
					<Route path='/settings' element={<Settings />} />
					<Route path="/*" element={<Navigate to="/" replace />} />
				</Routes>
			</>

		) :
		<Spinner color="#5c96f8" />
})