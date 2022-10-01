
import { useDispatch, useSelector } from 'react-redux'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
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
					Swal.fire('Error signing in', 'There was a problem, please try again', 'error');
					dispatch(onLogout());
				})

		}
	}

	const checkAuthentication = () => {

		if (!user.name) {

			onAuthStateChanged(auth, async user => {

				if (!user) return dispatch(onLogout());
				dispatch(onLogin({
					name: user.displayName,
					uid: user.uid
				}))

			} )

		} else {

			const user = JSON.parse(localStorage.getItem('user'));

			if (user != null) {
				return dispatch(onLogin(user));
			}

			dispatch(onLogout());

		}

	}

const logOut = () => {
	signOut(auth).then(() => {
		dispatch(onLogout())
	}).catch((error) => {
		Swal.fire('Error', 'There was an error signing out, please try again', 'error')
	});
}

	return {
		//* Properties
		status,
		user,

		//* Methods
		checkAuthentication,
		loginWithoutAcc,
		startLoginWithEmailPassword,
		startRegisterWithEmailPasswordName,
		startLoginWithGoogle
	}

}
