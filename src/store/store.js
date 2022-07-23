import { configureStore } from '@reduxjs/toolkit';
import { scheduleSlice, tasksSlice, uiSlice, authSlice, objectivesSlice } from './';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		tasks: tasksSlice.reducer,
		events: scheduleSlice.reducer,
		objectives: objectivesSlice.reducer,
		ui: uiSlice.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	})
})