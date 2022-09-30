import { useAutoSave } from '../../hooks';

export const ListItem = ({ event, useList, children, componentName }) => {
	//The children is the second component (progressBar, checkbox, dateTimePicker), since the useList is a hook that allows to get the change funcions of both childrens

	const [
		onInputChange,
		onChildrenChange,
		deleteEvent,
		childrenValue,
		autoSave,
	] = useList(event);

	useAutoSave(event, autoSave, componentName);

	return (
		<li>
			<input
				autoComplete="off"
				autoFocus
				name="name"
				onChange={onInputChange}
				type="text"
				value={event.name}
			/>
			{children(onChildrenChange, childrenValue)}
			<button
				onClick={
					() => {
						deleteEvent(event.id)
					}
				}
			>
				<i className="fa-solid fa-trash-can"></i>
			</button>
		</li>
	)
}
