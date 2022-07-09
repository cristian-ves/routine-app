import { Routes, Route } from 'react-router-dom'

import { PublicRoute, PrivateRouter, DashboardRoutes } from './'
import { Welcome } from '../routine'

export const AppRouter = () => {

	return (
		<Routes>

			<Route
				path='/welcome/'
				element={
					<PublicRoute>
						<Welcome />
					</PublicRoute>
				}
			/>

			<Route
				path='/*'
				element={
					<PrivateRouter>
						<DashboardRoutes />
					</PrivateRouter>
				}
			/>



		</Routes>
	)
}