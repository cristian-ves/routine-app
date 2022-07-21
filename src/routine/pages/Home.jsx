import { Schedule, Tasks, Objectives } from '..';
import { useSave } from '../../hooks';

export const Home = () => {

	const { saveAll } = useSave();

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
