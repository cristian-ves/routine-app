import { Navigate, useLocation } from 'react-router-dom';
import { useUserStore } from '../hooks/useUserStore.js';


export const PrivateRouter = ({ children }) => {

	const { displayName } = useUserStore();

	//TODO: set location where user was las time
	const { pathname } = useLocation();

	localStorage.setItem('lastPath', pathname)

	return displayName
		? children
		: <Navigate to={`/welcome/`} />
};
