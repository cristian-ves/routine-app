import { useEffect } from 'react';
import { Spinner } from '../auth';
import { useAuthStore } from '../hooks'

import { DashboardRoutes, AuthRoutes } from './'

export const AppRouter = () => {

	const { status, checkUserExistence } = useAuthStore();

	useEffect(() => {
		checkUserExistence();
	}, []);

	if (status == 'checking') {
		return (<Spinner color="#5c96f8" />)
	}

	return (status === 'not-authenticated')
		? <AuthRoutes />
		: <DashboardRoutes />
}