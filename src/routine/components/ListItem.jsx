
export const ListItemEvent = ({ event, useList, children }) => {
	//The children is the second component (progressBar, checkbox, dateTimePicker), while the useList is a hook that allows to get the change funcions of both childrens

	const [
		handleInputChange,
		handleDatePickerChange,
		deleteEvent,
		childrenValue
	] = useList(event);

	return (
		<li>
			<input
				autoComplete="off"
				name="name"
				onChange={handleInputChange}
				type="text"
				value={event.name}
			/>
			{children(handleDatePickerChange, childrenValue)}
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
