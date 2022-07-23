import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		saving: {
			msg: '',
			componentName: null
		}
	},
	reducers: {
		onClearSaving: (state) => {
			state.saving = {
				msg: '',
				componentName: null
			};
		},
		onShowSaving: (state, { payload }) => {
			state.saving = {
				msg: 'Saving...',
				componentName: payload
			}
		}
	}
});

export const { onClearSaving, onShowSaving } = uiSlice.actions;