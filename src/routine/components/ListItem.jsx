import { useAutoSave } from '../../hooks';

export const ListItem = ({ event, useList, children }) => {
	//The children is the second component (progressBar, checkbox, dateTimePicker), while the useList is a hook that allows to get the change funcions of both childrens

	const [
		onInputChange,
		onChildrenChange,
		deleteEvent,
		childrenValue,
		autoSave,
	] = useList(event);

	useAutoSave(event, autoSave);

	return (
		<li>
			<input
				autoComplete="off"
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
