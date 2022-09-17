
import { useDispatch, useSelector } from 'react-redux'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

import { auth } from '../firebase/firebase-config';
import { onChecking, onLogin, onLogout } from '../store';

export const useAuthStore = () => {

	const { status, user, errorMessage } = useSelector(state => state.auth)
	const dispatch = useDispatch();

	const loginWithoutAcc = ({ name }) => {

		dispatch(onChecking());

		const user = {
			name,
			uid: '',
		};

		localStorage.setItem('user', JSON.stringify(user));
		dispatch(onLogin(user))

	}

	const checkUserExistence = () => {

		const user = JSON.parse(localStorage.getItem('user'));

		if (user != null) {
			return dispatch(onLogin(user));
		}

		dispatch(onLogout());

	}

	const startLogin = async ({ email, password }) => {

		/* dispatch(onChecking());

		try {
			const { data } = await calendarApi.post('/auth', { email, password });
			localStorage.setItem('token', data.token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(onLogin({
				name: data.name,
				uid: data.uid
			}));

		} catch (error) {
			dispatch(onLogout('Wrong credentials'));
			setTimeout(() => {
				dispatch(clearErrorMessage())
			}, 100);
		} */
	}


	const startRegisterWithEmailPasswordName = (email, password, name) => {
		return (dispatch) => {

			dispatch(onChecking());

			createUserWithEmailAndPassword(auth, email, password)
				.then(async (userCredential) => {
					const user = userCredential.user;

					await updateProfile(user, {
						displayName: name
					})

					dispatch(onLogin({
						name,
						uid: user.uid
					}))

				})
				.catch(e => {
					Swal.fire('Error creating account', 'Try with other data', 'error');
				});

		}

	}

	const startLoginWithEmailPassword = (email, password) => {
		return (dispatch) => {

			dispatch(onChecking());

			signInWithEmailAndPassword(auth, email, password)
				.then(({ user }) => {
					// Signed in
					dispatch(onLogin({
						name: user.displayName,
						uid: user.uid
					}))
					// ...
				})
				.catch(e => {
					Swal.fire('Error logging in', 'The password or the email must be wrong', 'error');

				});
		}
	}

	const startLogout = () => {
		localStorage.clear();
		dispatch(onLogoutCalendar());
		dispatch(onLogout());
	}

	return {
		//* Properties
		errorMessage,
		status,
		user,

		//* Methods
		checkUserExistence,
		loginWithoutAcc,
		startLogin,
		startLoginWithEmailPassword,
		startLogout,
		startRegisterWithEmailPasswordName,
	}

}