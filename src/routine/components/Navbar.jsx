import { Link, NavLink, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import { CombinatedLogo } from './CombinatedLogo';
import { useAuthStore } from '../../hooks';

export const Navbar = () => {


	const { user } = useAuthStore();
	const { name } = user;
	// const { user, dispatch } = useContext(AuthContext);
	// const { name } = user;

	/* TODO: Logout
		const handleLogout = () => {

		dispatch({
			type: types.logout
		});

		navigate('/login', {
			replace: true
		});

	} */

	return (
		<nav >
			<CombinatedLogo />
			<p>{format(new Date(), 'PPP')}</p>
			<div>
				<span>{name}</span>&ensp;
				<i className="fa-solid fa-user"></i>
			</div>
		</nav>
	)
}