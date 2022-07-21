import { Link } from "react-router-dom";

import { TextBox } from '../';
import { useForm } from '../../hooks';

export const LoginPage = () => {

	const [values, onInputChange] = useForm({
		email: '',
		password: ''
	});
	const { email, password } = values;


	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<h3>Log in</h3>
			<form onSubmit={handleSubmit}>
				<TextBox
					handleInputChange={onInputChange}
					inputType='email'
					labelText='Email'
					name='email'
					value={email}
				/>
				<TextBox
					handleInputChange={onInputChange}
					inputType='password'
					labelText='Password'
					name='password'
					value={password}

				/>
				<div>
					<input type="checkbox" name="keepLogin" id="keepLogin" />
					<label htmlFor="keepLogin">Keep me logged in</label>

					{/* <p>Forgot your password?</p>  Todo: Forgot password sistem*/}
				</div>
				<button>
					Log in
				</button>
			</form>
			<div>
				<span>Havent sign in yet?</span>
				&ensp;
				<Link to="/auth/signin">Sign in</Link>
			</div>
			<Link to='/auth/guest'>Enter without account </Link>
		</>
	)
}
