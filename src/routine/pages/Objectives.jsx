import { Slider } from '@mui/material';

import { ListItem } from '../';
import { useListItemObjective } from '../../hooks';
import { useRoutineStore } from '../../hooks/useRoutineStore';

export const Objectives = () => {

	const { objectives, addObjective } = useRoutineStore();

	const handleAddObjective = () => {
		const id = new Date().getTime();
		addObjective({
			name: '',
			progress: 50,
			id
		});
	}

	return (
		<>
			<h1>Objectives</h1>

			<ul>
				{
					objectives.map((objective, i) => {
						return (
							<ListItem
								key={i}
								event={objective}
								useList={useListItemObjective}
							>
								{
									(change, value) => {
										return (
											<Slider
												aria-label="Default"
												valueLabelDisplay="auto"
												value={value}
												onChange={change}
											/>
										)
									}
								}

							</ListItem>
						)
					})
				}
			</ul>
			<button
				onClick={handleAddObjective}
			>
				<i className="fa-solid fa-plus"></i>
			</button>
		</>
	)
}
