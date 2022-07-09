
import { Link, NavLink, useNavigate } from 'react-router-dom';


export const NavbarList = () => {
	return (
		<nav>
			<div>
				<i className="fa-solid fa-house"></i>
				<Link
					to='/'
				>
					Home
				</Link>
			</div>
			<div>
				<i className="fa-solid fa-calendar"></i>
				<Link
					to='/schedule'
				>
					Schedule
				</Link>
			</div>
			<div>
				<i className="fa-solid fa-list-check"></i>
				<Link
					to='/tasks'
				>
					Tasks
				</Link>
			</div>
			<div>
				<i className="fa-solid fa-bullseye"></i>
				<Link
					to='/objectives'
				>
					Objectives
				</Link>
			</div>
			<div>
				<i className="fa-solid fa-clock-rotate-left"></i>
				<Link
					to='/history'
				>
					History
				</Link>
			</div>
			<div>
				<i className="fa-solid fa-gear"></i>
				<Link
					to='/settings'
				>
					Settings
				</Link>
			</div>
		</nav>
	)
}
