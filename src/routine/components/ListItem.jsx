import React from 'react'
import { useForm } from '../../hooks/useform'

export const ListItem = ({ text, component }) => {

	const [formValues, handleInputChange] = useForm({
		name: text
	});
	const { name } = formValues;

	return (
		<li>
			<input
				type="text"
				name="name"
				id={text}
				onChange={handleInputChange}
				value={name}
			/>
			{component}
		</li>
	)
}
