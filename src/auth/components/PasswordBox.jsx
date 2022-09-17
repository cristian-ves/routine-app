
import { useEffect, useId, useRef, useState } from 'react';
import Styles from '../../styles/components/TextBox.module.css';
import PassStyles from '../../styles/components/PasswordBox.module.css';

export const PasswordBox = ({
	handleInputChange, // function to do when input change
	labelText,
	errorMessage = '',
	resetValue, // function to clear the input value
	...inputProps
}) => {

	const [containerClass, setContainerClass] = useState(Styles.container);

	const input = useRef(null);

	const id = useId();

	const [eyeSlashed, setEyeSlashed] = useState(true);
	const toggleEyeSlashed = () => setEyeSlashed(eyeSlashed => !eyeSlashed);

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
					autoComplete="off"
					className={Styles.input}
					id={id}
					onChange={handleInputChange}
					placeholder=' '
					ref={input}
					required
					type={(eyeSlashed) ? 'password' : 'text'}

					{...inputProps}
				/>
				<label htmlFor={id} className={Styles.info}>{labelText || input.current.name}:</label>
				<i
					className={PassStyles.eye + ' fa-solid fa-eye' + (eyeSlashed ? '-slash' : '')}
					onClick={toggleEyeSlashed}
				></i>
			</div>
			<p className={Styles['error-message']}>{errorMessage}</p>
		</div>
	)
}