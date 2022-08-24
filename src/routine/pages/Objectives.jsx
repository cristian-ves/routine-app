import { Slider } from '@mui/material';
import { useEffect } from 'react';

import { List } from '../';
import { useListItemObjective, useObjectivesStore } from '../../hooks';

export const Objectives = () => {

	const { objectives, addObjective } = useObjectivesStore();

	return (
		<>
			<List
				handleAddItem={addObjective}
				hook={useListItemObjective}
				list={objectives}
				title='Objectives'
				componentName='objectives'
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
