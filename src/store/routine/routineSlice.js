

import { createSlice } from '@reduxjs/toolkit';

export const routineSlice = createSlice({
	name: 'routine',
	initialState: {
		days: [

			{
				events: [],
				tasks: [],
				objectives: [
					{
						name: 'focus',
						progress: 100
					},
					{
						name: 'discipline',
						progress: 100
					}
				],
				date: new Date(),
			},
			{
				events: [],
				tasks: [
					{
						name: 'feed turtles',
						done: true
					},
					{
						name: 'water plants',
						done: true
					},
					{
						name: 'call mom',
						done: false
					},
				],
				objectives: [
					{
						name: 'focus',
						progress: 50
					},
					{
						name: 'discipline',
						progress: 0
					}
				],
				date: new Date(),
			},
			{
				events: [],
				tasks: [
					{
						name: 'feed turtles',
						done: false
					},
					{
						name: 'water plants',
						done: true
					},
					{
						name: 'call mom',
						done: false
					},
				],
				objectives: [
					{
						name: 'focus',
						progress: 50
					},
					{
						name: 'discipline',
						progress: 100
					}
				],
				date: new Date(),
			},
		],
		events: [
			{
				name: 'web dev',
				time: new Date().getTime()
			},
			{
				name: 'math class',
				time: new Date().getTime()
			},
			{
				name: 'homework',
				time: new Date().getTime()
			},
		],
		tasks: [
			{
				name: 'feed turtles',
				done: false
			},
			{
				name: 'water plants',
				done: true
			},
			{
				name: 'call mom',
				done: false
			},
		],
		objectives: [
			{
				name: 'focus',
				progress: 50
			},
			{
				name: 'discipline',
				progress: 0
			}
		]
	},
	reducers: {
		onAddDay: (state, { payload }) => {
			state.days = [...state.days, payload]
		},
		onAddEvent: (state, { payload }) => {
			state.events = [...state.events, payload]
		},
		onAddTask: (state, { payload }) => {
			state.tasks = [...state.tasks, payload]
		},
		onAddObjective: (state, { payload }) => {
			state.objectives = [...state.objectives, payload]
		},
		onEditEvent: (state, { payload }) => {
			state.events[payload.i] = payload.event;
		},
	}
});

export const { onAddDay, onAddEvent, onAddTask, onAddObjective, onEditEvent } = routineSlice.actions;