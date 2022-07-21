import { Link } from "react-router-dom";

import { useForm } from '../../hooks';
import { TextBox } from '../';

export const SigninPage = () => {
	const [values, onInputChange] = useForm({
		name: '',
		email: '',
		password: '',
		password2: ''
	});
	const { name, email, password, password2 } = values;


	const handleSubmit = (e) => {
		e.preventDefault();

	}

	return (
		<>
			<h3>Sign in</h3>
			<form onSubmit={handleSubmit}>
				<TextBox
					handleInputChange={onInputChange}
					labelText='Name'
					name='name'
					required
					value={name}
				/>
				<TextBox
					handleInputChange={onInputChange}
					labelText='Email'
					inputType='email'
					name='email'
					required
					value={email}
				/>
				<TextBox
					handleInputChange={onInputChange}
					labelText='Password'
					inputType='password'
					name='password'
					required
					value={password}
				/>
				<TextBox
					handleInputChange={onInputChange}
					labelText='Repeat password'
					name='password2'
					value={password2}
					inputType='password'
				/>
				<div>
					<input type="checkbox" name="keepLogin" id="keepLogin" />
					<label htmlFor="keepLogin">Keep me logged in</label>

					{/* <p>Forgot your password?</p>  Todo: Forgot password sistem*/}
				</div>
				<button>
					Sign in
				</button>
			</form>
			<div>
				<span>Already have an account?</span>
				&ensp;
				<Link to="/auth/login">Log in</Link>
			</div>
			<Link to='/auth/guest'>Enter without account </Link>
		</>
	)
}
