
import { useEffect, useId, useRef, useState } from 'react';
import Styles from '../../styles/components/TextBox.module.css';

export const TextBox = ({
	handleInputChange, // function to do when input change
	labelText,
	errorMessage = '',
	resetValue, // function to clear the input value
	...inputProps
}) => {

	const [containerClass, setContainerClass] = useState(Styles.container);

	const input = useRef(null);

	const id = useId();

	useEffect(() => {

		if (errorMessage != '') {
			setContainerClass(Styles.container + ' ' + Styles.error);
			input.current.focus();
		} else {
			setContainerClass(Styles.container);
		}

	}, [errorMessage])


	return (
		<div className={containerClass}>
			<div className={Styles.group}>
				<input
					id={id}
					autoComplete="off"
					className={Styles.input}
					onChange={handleInputChange}
					type={'text'}
					placeholder=' '
					ref={input}
					{...inputProps}
				/>
				<label htmlFor={id} className={Styles.info}>{labelText || input.current.name}:</label>
			</div>
			<p className={Styles['error-message']}>{errorMessage}</p>
		</div>
	)
}