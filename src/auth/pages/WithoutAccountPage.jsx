import { Link } from "react-router-dom";

import { useForm, useAuthStore } from '../../hooks';
import { TextBox } from '../';
import { useEffect, useState } from 'react';

export const WithoutAccountPage = () => {

	const [formValues, handleInputChange, reset] = useForm({ name: '' });
	const { name } = formValues;
	const { loginWithoutAcc } = useAuthStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name.length < 4)
			return setErrorMessage('The name must be at least 4 letters');
		loginWithoutAcc({ name });
	}

	useEffect(() => {
		if (name != '') setErrorMessage('');
	}, [name])

	const [errorMessage, setErrorMessage] = useState('');


	return (
		<>

			<h3>Continue without account</h3>
			<div>
				<i className="fa-solid fa-circle-info"></i>
				<p>All your data will be saved only on this device, if you want to keep it, please register.</p>
			</div>
			<form onSubmit={handleSubmit}>
				<TextBox
					name='name'
					labelText='Name'
					value={name}
					handleInputChange={handleInputChange}
					resetValue={reset}
				/>
				<button>Enter</button>
			</form>
			<div>
				<Link to='/auth/login'>Log in</Link>
				&ensp;-&ensp;
				<Link to='/auth/register'>Register</Link>
			</div>
		</>
	)
}
