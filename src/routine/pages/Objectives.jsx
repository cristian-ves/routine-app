import { Slider } from '@mui/material';

import { useRoutineStore, useListItemObjective } from '../../hooks/';
import { List } from './List';

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
			<List
				handleAddItem={handleAddObjective}
				hook={useListItemObjective}
				list={objectives}
				title='Objectives'
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
			</List>
		</>
	)
}
