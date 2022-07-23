import { configureStore } from '@reduxjs/toolkit';
import { authSlice, routineSlice, tasksSlice, uiSlice } from './';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		routine: routineSlice.reducer,
		tasks: tasksSlice.reducer,
		ui: uiSlice.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	})
})