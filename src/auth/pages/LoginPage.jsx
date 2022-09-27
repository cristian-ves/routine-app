import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import validator from 'validator';

import { TextBox, PasswordBox, GoogleButton } from '../';
import { useAuthStore, useFormWithErrors } from '../../hooks';

export const LoginPage = () => {

	const dispatch = useDispatch();
	const { startLoginWithEmailPassword, startLoginWithGoogle } = useAuthStore();
	const { formValues, onInputChange, errors, onAddError } = useFormWithErrors({
		email: '', password: ''
	});
	const { email, password } = formValues;


	const isFormValid = () => {

		if (!validator.isEmail(email)) {
			onAddError('email', 'You must enter a valid email');
			return false;
		}

		return true;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isFormValid())
			dispatch(startLoginWithEmailPassword(email, password));
	}

	const signInWithGoogle = () => {
		dispatch(startLoginWithGoogle());
	}

	return (
		<>
			<h3>Log in</h3>
			<form onSubmit={handleSubmit}>
				<TextBox
					handleInputChange={onInputChange}
					labelText='Email'
					name='email'
					required
					value={email}
					errorMessage={errors.email}
				/>
				<PasswordBox
					handleInputChange={onInputChange}
					labelText='Password'
					name='password'
					value={password}

				/>
				<div>
					<input type="checkbox" name="keepLogin" id="keepLogin" />
					<label htmlFor="keepLogin">Keep me logged in</label>

					{/* <p>Forgot your password?</p>  TODO: Forgot password sistem*/}
				</div>
				<button>
					Log in
				</button>
				<GoogleButton
					width="20rem"
					onClick={signInWithGoogle}
				/>
			</form>
			<div>
				<span>Not registered yet?</span>
				&ensp;
				<Link to="/auth/register">Register</Link>
			</div>
			<Link to='/auth/guest'>Enter without account </Link>
		</>
	)
}
