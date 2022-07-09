import { Slider } from '@mui/material';
import React from 'react'
import { ListItem } from '../';
import { useRoutineStore } from '../../hooks/useRoutineStore';

export const Objectives = () => {

	const { objectives } = useRoutineStore();

	return (
		<>
			<h1>Objectives</h1>

			{
				objectives.map(({ name, progress }, i) => {
					return (
						<ListItem
							text={name}
							component={
								<Slider
									defaultValue={progress} aria-label="Default" valueLabelDisplay="auto"
								/>
							}
							key={i}
						/>
					)
				})
			}
			<i className="fa-solid fa-plus"></i>
		</>
	)
}
