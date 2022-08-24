import { createSlice } from '@reduxjs/toolkit';

export const daysSlice = createSlice({
	name: 'days',
	initialState: {
		history: [
		],
		startOfTomorrow: null,
		currentId: null,
		currentDate: null,
	},
	reducers: {
		onLoadDays: (state, { payload = [] }) => {
			state.history = payload;
		},
		onAddDay: (state, { payload }) => {
			state.history.push(payload)
		},
		onSetExtraData: (state, { payload }) => {
			state.startOfTomorrow = payload.startOfTomorrow;
			state.currentId = payload.currentId;
			state.currentDate = payload.currentDate;
		},
		onUpdateDay: (state, { payload }) => {
			state.history = state.history.map(historyDay => (historyDay.id === payload.id) ? payload : historyDay);
		}
	}
});

export const { onLoadDays, onAddDay, onSetExtraData, onUpdateDay } = daysSlice.actions;