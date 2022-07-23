import { createSlice } from '@reduxjs/toolkit';

export const scheduleSlice = createSlice({
	name: 'schedule',
	initialState: [],
	reducers: {
		onAddEvent: (state, { payload }) => {
			state.push(payload);
		},

		onEditEvent: (state, { payload }) => (
			state.map(
				event => event.id === payload.id
					? payload
					: event
			)

		),

		onDeleteEvent: (state, { payload }) => (
			state.filter(event =>
				event.id !== payload
			)
		),

		onLoadEvents: (state, { payload }) => payload,
	}
});

export const { onAddEvent, onEditEvent, onDeleteEvent, onLoadEvents } = scheduleSlice.actions;