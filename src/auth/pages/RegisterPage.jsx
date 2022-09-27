import { Link } from "react-router-dom";
import validator from 'validator';

import { useAuthStore, useFormWithErrors } from '../../hooks';
import { TextBox, PasswordBox, GoogleButton } from '..';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

export const RegisterPage = () => {

	const dispatch = useDispatch();
	const { startRegisterWithEmailPasswordName, startLoginWithGoogle } = useAuthStore();
	const { formValues, onInputChange, resetValue, errors, onAddError } = useFormWithErrors({
		name: '', email: '', password: '', password2: ''
	});
	const { name, email, password, password2 } = formValues;


	const isFormValid = () => {

		if (name.trim().length === 0) {
			onAddError('name', 'The name can\'t be empty');
			resetValue('name');
			return false;
		} else if (!validator.isEmail(email)) {
			onAddError('email', 'You must enter a valid email');
			return false;
		} else if (password.length < 5 && password2.length < 5) {
			onAddError('password2', ' ');
			onAddError('password', 'Passwords must be longer than 5 characters');
			return false;
		} else if (password.length < 5) {
			onAddError('password', 'Passwords must be longer than 5 characters');
			return false;
		} else if (password2.length < 5) {
			onAddError('password2', 'Passwords must be longer than 5 characters');
			return false;
		} else if (password !== password2) {
			Swal.fire('Password validation', 'Passwords must be the same', 'error');
			return false;
		}

		return true;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isFormValid())
			dispatch(startRegisterWithEmailPasswordName(email, password, name));
	}

	const signUpWithGoogle = () => {
		dispatch(startLoginWithGoogle());
	}

	return (
		<>
			<h3>Register</h3>
			<form onSubmit={handleSubmit}>
				<TextBox
					handleInputChange={onInputChange}
					labelText='Name'
					name='name'
					value={name}
					errorMessage={errors.name}
				/>
				<TextBox
					handleInputChange={onInputChange}
					labelText='Email'
					name='email'
					required
					value={email}
					errorMessage={errors.email}
				/>
				<PasswordBox
					errorMessage={errors.password}
					handleInputChange={onInputChange}
					labelText='Password'
					name='password'
					value={password}
				/>
				<PasswordBox
					errorMessage={errors.password2}
					handleInputChange={onInputChange}
					labelText='Confirm password'
					name='password2'
					value={password2}
				/>
				<div>
					<input type="checkbox" name="keepLogin" id="keepLogin" />
					<label htmlFor="keepLogin">Keep me logged in</label>
				</div>
				<button>
					Register
				</button>

				<GoogleButton
					width="20rem"
					type="sign-up"
					onClick={signUpWithGoogle}
				/>

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
