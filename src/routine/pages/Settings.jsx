import React from 'react'

export const Settings = () => {
	return (
		<>
			<h1>Settings</h1>
			<form >
				<div>
					<input
						type="radio"
						name="darkMode"
						id="light"
						defaultChecked={true}
					/>
					<input
						type="radio"
						name="darkMode"
						id="dark"
					/>
					<span>Dark mode</span>
				</div>

				<select name="languages" id="languages">
					<option value='english'>English</option>
					<option value='spanish'>Spanish</option>
				</select>

			</form>
		</>
	)
}
