import { createSlice } from '@reduxjs/toolkit';

export const objectivesSlice = createSlice({
	name: 'objectives',
	initialState: [],
	reducers: {
		onAddObjective: (state, { payload }) => {
			state.push(payload);
		},

		onEditObjective: (state, { payload }) => (
			state.map(
				objective => objective.id === payload.id
					? payload
					: objective
			)

		),

		onDeleteObjective: (state, { payload }) => (
			state.filter(objective =>
				objective.id !== payload
			)
		),

		onLoadObjectives: (state, { payload }) => payload,


	}
});

export const { onAddObjective, onEditObjective, onDeleteObjective, onLoadObjectives, } = objectivesSlice.actions;