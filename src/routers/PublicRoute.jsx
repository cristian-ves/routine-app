import { Navigate } from 'react-router-dom';
import { useUserStore } from '../hooks/useUserStore';

export const PublicRoute = ({ children }) => {

	const { displayName } = useUserStore();

	return !displayName
		? children
		: <Navigate to={`/`} />;
};
