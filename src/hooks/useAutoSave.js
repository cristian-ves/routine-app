import { useCallback, useEffect } from 'react';
import { debounce } from 'lodash';
import { useUiStore } from './';

export const useAutoSave = (values, save, componentName, timeMS = 2000) => {

	const { clearMessage } = useUiStore();

	useEffect(() => {
		if (values) {
			debouncedSave(values);
		}
	}, [values])


	const debouncedSave = useCallback(
		debounce(async (values) => {
			save(values);
			clearMessage(componentName);

		}, timeMS),
		[]
	);


}
