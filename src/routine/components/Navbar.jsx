import { Link, NavLink, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import { useUserStore } from '../../hooks/useUserStore';
import { CombinatedLogo } from './CombinatedLogo';

export const Navbar = () => {


	const { displayName } = useUserStore();
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
				<span>{displayName}</span>&ensp;
				<i className="fa-solid fa-user"></i>
			</div>
		</nav>
	)
}