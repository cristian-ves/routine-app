import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		saving: {
			msg: 'Saving...',
			schedule: false,
			tasks: false,
			objectives: false
		}
	},
	reducers: {
		onClearSaving: (state, { payload }) => {
			if (state.saving.hasOwnProperty(payload))
				state.saving[payload] = false
		},
		onShowSaving: (state, { payload }) => {
			if (state.saving.hasOwnProperty(payload))
				state.saving[payload] = true
		}
	}
});

export const { onClearSaving, onShowSaving } = uiSlice.actions;
