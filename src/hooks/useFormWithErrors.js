import { useEffect, useState } from 'react';

export const useFormWithErrors = (initialState = {}) => {
	/* A hook used to manage form values with an error message for each value */

	const [formValues, setFormValues] = useState(initialState);

	const [errors, setErrors] = useState({});

	const [hasErrors, setHasErrors] = useState(false); // this state is made to avoid reiteration of removing an error when an input change

	useEffect(() => { // creates a copy of the formValues object but each property has an empty value

		const errors = {};

		for (const field in formValues) {
			if (Object.hasOwnProperty.call(formValues, field))
				errors[field] = '';
		}

		setErrors(errors)

	}, []);

	const onAddError = (valueName, error) => {
		setErrors(errors => ({
			...errors,
			[valueName]: error
		}));
		setHasErrors(true);
	}

	const removeError = valueName => {
		const newErrors = {
			...errors,
			[valueName]: ''
		}

		if (Object.values(newErrors).every(value => value === '')) setHasErrors(false);

		setErrors(newErrors)
	}

	const reset = (newFormState = initialState) => {
		setFormValues(initialState)
	}

	const resetValue = valueName => {
		if (initialState[valueName] != undefined) {

			setFormValues({
				...formValues,
				[valueName]: initialState[valueName]
			})
		}
	}

	const onInputChange = ({ target }) => {

		setFormValues({
			...formValues,
			[target.name]: target.value
		});

		if (hasErrors)
			removeError(target.name)

	}


	return {

		formValues,
		onInputChange,
		reset,
		resetValue,

		errors,
		onAddError,
		removeError,

	};

} 