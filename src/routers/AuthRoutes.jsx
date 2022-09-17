import { memo } from 'react';
import { Route, Routes, Navigate } from "react-router";
import { LoginPage, RegisterPage, WelcomePage, WithoutAccountPage } from '../auth';


export const AuthRoutes = memo(() => {

	return (
		<>

			<img src="" alt="logo" />
			<h1>Routine App</h1>

			<Routes>
				<Route path="/auth/welcome" element={<WelcomePage />} />
				<Route path='/auth/guest' element={<WithoutAccountPage />} />
				<Route path='/auth/login' element={<LoginPage />} />
				<Route path='/auth/register' element={<RegisterPage />} />

				{/* <Route path="/*" element={<Navigate to="/auth/welcome" />} /> */}
				<Route path="/*" element={<Navigate to="/auth/guest" />} /> {/*//Todo: Replace for the above commented code */}
			</Routes>

		</>
	)
})
