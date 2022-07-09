import { useRef, useState } from 'react';
import { useForm } from '../../hooks/useform'

export const ListItem = ({ text, component, onEdit }) => {

	const [formValues, handleInputChange] = useForm({
		name: text
	});
	const { name } = formValues;

	const input = useRef(null);
	const editIcon = useRef(null);


	const [isEditing, setIsEditing] = useState(true)
	const handleListItemInputChange = (htmlEvent) => {
		handleInputChange(htmlEvent);
	}

	const toggleEdit = () => {
		setIsEditing(!isEditing);

		if (isEditing) { // Edit
			editIcon.current.className = "fa-solid fa-check"
			input.current.disabled = false
			input.current.focus();
			setIsEditing(false)
		} else { // Save
			event.target.value = text;
			event.target.disabled = true
			editIcon.current.className = "fa-solid fa-pen"
			edit()
			setIsEditing(true);
		}
		input.current.addEventListener('blur', event => {
			event.target.value = text;
			event.target.disabled = true
			editIcon.current.className = "fa-solid fa-pen"
			setIsEditing(true)
		})
	}

	const handleDelete = () => {

	}

	return (
		<li>

			<input
				type="text"
				name="name"
				id={text}
				autoComplete="off"
				onChange={handleListItemInputChange}
				value={name}
				disabled
				ref={input}
			/>
			{component}
			<button
				onClick={toggleEdit}
			>
				<i
					className="fa-solid fa-pen"
					ref={editIcon}
				></i>
			</button>
			<button
				onClick={handleDelete}
			>
				<i className="fa-solid fa-trash-can"></i>
			</button>
		</li>
	)
}
