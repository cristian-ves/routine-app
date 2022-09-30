import { useUiStore } from '../../hooks'

import Styles from '../../styles/components/Spinner.module.css';

export const SavingSpinner = ({ componentName }) => {

	const { saving } = useUiStore();

	!saving.hasOwnProperty(componentName) && <></>

	return (saving[componentName])
		? (
			<div style={{ animationDuration: '3s' }}>
				<i className={`fa-solid fa-rotate ${Styles.upper}`} ></i>&ensp;
				<small>{saving.msg}</small>
			</div>
		)
		: (
			<i className="fa-solid fa-check"></i>
		)


}
