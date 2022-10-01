import { useEffect } from 'react';

import { Spinner } from '../auth';
import { useAuthStore } from '../hooks'
import { DashboardRoutes, AuthRoutes } from './'
import { auth } from '../firebase/firebase-config.js'

export const AppRouter = () => {

	const { user, status, checkAuthentication } = useAuthStore();

	useEffect(() => {
		checkAuthentication();
	}, []);

	if (status == 'checking') {
		return (<Spinner color="#5c96f8" />)
	}

	return (status === 'not-authenticated')
		? <AuthRoutes />
		: <DashboardRoutes />
}
