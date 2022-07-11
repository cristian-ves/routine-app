import { Schedule, Tasks, Objectives } from '..';
import { useSave } from '../../hooks';

export const Home = () => {

	const { handleSaveEvents, handleSaveTasks, handleSaveObjectives } = useSave();

	const saveAll = () => {
		handleSaveEvents();
		handleSaveTasks();
		handleSaveObjectives();
	}

	return (
		<>
			<h1>Home</h1>
			<button
				onClick={saveAll}
			>
				<i className="fa-solid fa-floppy-disk"></i>
			</button>
			<span>save all</span>
			<Schedule />
			<Tasks />
			<Objectives />
		</>
	)
}
