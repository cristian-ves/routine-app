import { createSlice } from '@reduxjs/toolkit';

export const daysSlice = createSlice({
	name: 'days',
	initialState: {
		days: [
		]
	},
	reducers: {
		onLoadDays: (state, { payload = [] }) => {
			state.days = payload;
		},
		onAddDay: (state, { payload }) => {
			state.history.push(payload)
		},
		onUpdateDay: (state, { payload }) => {
			state.history = state.history.map(historyDay => (historyDay.id === payload.id) ? payload : historyDay);
		}
	}
});

export const { onLoadDays, onAddDay, onUpdateDay } = daysSlice.actions;