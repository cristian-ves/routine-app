import { Link, NavLink, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import { CombinatedLogo } from './CombinatedLogo';
import { useAuthStore } from '../../hooks';

export const Navbar = () => {


	const { user, logOut } = useAuthStore();
	const { name } = user;

	return (
		<nav >
			<CombinatedLogo />
			<p>{format(new Date(), 'PPP')}</p>
			<div>
				<span>{name}</span>&ensp;
				<i className="fa-solid fa-user"></i>
			</div>
			<div
				onClick={logOut}
			>
				logout
			</div>
		</nav>
	)
}