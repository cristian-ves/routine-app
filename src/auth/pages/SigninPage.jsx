import { Link } from "react-router-dom";
import validator from 'validator';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { useAuthStore, useFormWithErrors } from '../../hooks';
import { TextBox } from '../';
import { useDispatch } from 'react-redux';

export const SigninPage = () => {

	const dispatch = useDispatch();
	const { startRegisterWithEmailPasswordName } = useAuthStore();
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
		} else if (password !== password2) {
			onAddError('password2', ' ');
			onAddError('password', 'Passwords must be the same');
			return false;
		} else if (password.length < 5) {
			onAddError('password2', ' ');
			onAddError('password', 'Passwords must be longer than 5 characters');
			return false;
		}

		return true;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isFormValid())
			dispatch(startRegisterWithEmailPasswordName(email, password, name));
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
				<TextBox
					errorMessage={errors.password}
					handleInputChange={onInputChange}
					inputtype='password'
					labelText='Password'
					name='password'
					required
					type='password'
					value={password}
				/>
				<TextBox
					errorMessage={errors.password2}
					handleInputChange={onInputChange}
					labelText='Repeat password'
					name='password2'
					type='password'
					value={password2}
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
