import { useUiStore } from '../../hooks'

import Styles from '../../styles/components/Spinner.module.css';

export const SavingSpinner = ({ componentName }) => {

	const { saving } = useUiStore();

	return (
		<div style={{ display: (saving.componentName === componentName) ? 'block' : 'none' }}>
			<i className={`fa-solid fa-spinner ${Styles.upper}`} ></i>&ensp;
			<small>{saving.msg}</small>
		</div>
	)
}
