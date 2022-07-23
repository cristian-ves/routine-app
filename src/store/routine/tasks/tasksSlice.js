import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState: [],
	reducers: {
		onAddTask: (state, { payload }) => {
			state.push(payload);
		},

		onEditTask: (state, { payload }) => (
			state.map(
				task => task.id === payload.id
					? payload
					: task
			)

		),

		onDeleteTask: (state, { payload }) => (
			state.filter(task =>
				task.id !== payload
			)
		),

		onLoadTasks: (state, { payload }) => payload,
	}
});

export const { onAddTask, onEditTask, onDeleteTask, onLoadTasks } = tasksSlice.actions;