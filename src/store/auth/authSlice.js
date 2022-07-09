
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		uid: '',
		displayName: 'Alejandro',
	},
	reducers: {
		onAddData: (state, { payload }) => {
			state.displayName = payload.displayName;
			state.uid = payload.uid;
		},
	}
});

export const { onAddData } = authSlice.actions;