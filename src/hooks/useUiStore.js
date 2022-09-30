import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onClearSaving, onShowSaving } from '../store';

export const useUiStore = () => {

	const dispatch = useDispatch();

	const { saving } = useSelector(state => state.ui);

	const showMessage = useCallback(componentName => {
			dispatch(onShowSaving(componentName));
	}, [saving])

	const clearMessage = (componentName) => {
		dispatch(onClearSaving(componentName));
	}

	return {
		//* properties
		saving,

		//*methods
		showMessage,
		clearMessage
	}

}
