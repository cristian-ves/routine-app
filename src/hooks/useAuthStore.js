
import { useDispatch, useSelector } from 'react-redux'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';

import { auth, provider } from '../firebase/firebase-config';
import { onChecking, onLogin, onLogout } from '../store';

export const useAuthStore = () => {

	const { status, user} = useSelector(state => state.auth)
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

	const checkUserExistence = () => { // check if a user exists in the localStorage, works for withoutAcc

		const user = JSON.parse(localStorage.getItem('user'));

		if (user != null) {
			return dispatch(onLogin(user));
		}

		dispatch(onLogout());

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
					dispatch(onLogout());
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
					dispatch(onLogout());
				});
		}
	}

	const startLoginWithGoogle = () => {
		return (dispatch) => {

			signInWithPopup(auth, provider)
				.then (result => {
					// This gives you a Google Access Token. You can use it to access the Google API.
			    const credential = GoogleAuthProvider.credentialFromResult(result);
			    const token = credential.accessToken;
			    // The signed-in user info.
			    const user = result.user;

					dispatch(onLogin({
						name: user.displayName,
						uid: user.uid
					}))

			    // ...
				}).catch(error => {
					Swal.fire('Error signing up', 'There was a problem, please try again', 'error');
					dispatch(onLogout());
				})

		}
	}

	const startLogout = () => {
		localStorage.clear();
		dispatch(onLogoutCalendar());
		dispatch(onLogout());
	}

	return {
		//* Properties
		status,
		user,

		//* Methods
		checkUserExistence,
		loginWithoutAcc,
		startLoginWithEmailPassword,
		startLogout,
		startRegisterWithEmailPasswordName,
		startLoginWithGoogle
	}

}

//onAuthStateChanged(auth, (user) => {
//   if(user) {
//
//     dispatch(onLogin({
//       name: user.displayName,
//       uid: user.uid
//     }))
//
//   } else {
//
//      dispatch(onLogout());
//
//   }
// })
