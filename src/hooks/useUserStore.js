import { useSelector, useDispatch } from 'react-redux'
import { onAddData } from '../store';


export const useUserStore = () => {

	const dispatch = useDispatch();

	const { displayName } = useSelector(state => state.user);

	const addUser = user => {
		dispatch(onAddData(user));
	}

	return {
		//* properties
		displayName,

		//* methods
		addUser,
	}
}