import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onClearSaving, onShowSaving } from '../store';

export const useUiStore = () => {

	const dispatch = useDispatch();

	const ui = useSelector(state => state.ui);
	const { saving } = ui;

	const showMessage = useCallback(componentName => {
		dispatch(onShowSaving(componentName));
	}, [saving.component])

	const clearMessage = () => {
		dispatch(onClearSaving());
	}

	return {
		//* properties
		saving,

		//*methods
		showMessage,
		clearMessage
	}

}