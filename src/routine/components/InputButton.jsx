
export const InputButton = ({
	value,
	name,
	handleInputChange,
	icon,
	click,
	placeholder,
	className,
}) => {
	return (
		<div>
			<p>name:</p>
			<input
				type="text"
				placeholder={placeholder}
				name={name}
				className={className}
				autoComplete="off"
				value={value}
				onChange={handleInputChange}
			/>
			<button
				onClick={click}
			>
				{icon}
			</button>
		</div>
	)
}