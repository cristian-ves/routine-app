

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
				time: new Date().getTime(),
				id: 0
			},
			{
				name: 'math class',
				time: new Date().getTime(),
				id: 1
			},
			{
				name: 'homework',
				time: new Date().getTime(),
				id: 2
			},
		],
		tasks: [
			{
				name: 'feed turtles',
				done: false,
				id: 0
			},
			{
				name: 'water plants',
				done: true,
				id: 1
			},
			{
				name: 'call mom',
				done: false,
				id: 2
			},
		],
		objectives: [
			{
				name: 'focus',
				progress: 50,
				id: 1
			},
			{
				name: 'discipline',
				progress: 0,
				id: 2
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
			state.events = state.events.map(
				event => event.id === payload.id
					? payload
					: event
			)
		},
		onEditTask: (state, { payload }) => {
			state.tasks = state.tasks.map(
				task => task.id === payload.id
					? payload
					: task
			)

		},
		onEditObjective: (state, { payload }) => {
			state.objectives = state.objectives.map(
				objective => objective.id === payload.id
					? payload
					: objective
			)

		},

		onDeleteEvent: (state, { payload }) => {
			state.events = state.events.filter(event =>
				event.id !== payload
			);
		},
		onDeleteTask: (state, { payload }) => {
			state.tasks = state.tasks.filter(task =>
				task.id !== payload
			);
		},
		onDeleteObjective: (state, { payload }) => {
			state.objectives = state.objectives.filter(objective =>
				objective.id !== payload
			);
		},
	}
});

export const {
	onAddDay, onAddEvent, onAddTask, onAddObjective,
	onEditEvent, onEditTask, onEditObjective,
	onDeleteEvent, onDeleteTask, onDeleteObjective
} = routineSlice.actions;