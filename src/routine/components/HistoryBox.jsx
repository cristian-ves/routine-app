import { format } from 'date-fns'
import { Slider } from '@mui/material';

export const HistoryBox = ({ date, tasksDone, totalTasks, avrgProgress }) => {

	return (
		<div>
			<p>{format(date, 'PPP')}</p>
			<ul>
				<li>
					<span>Tasks: </span> {tasksDone + '/' + totalTasks}
				</li>
				<li>
					<span>Objectives: </span>
					<span>
						<Slider
							value={avrgProgress}
							defaultValue={50}
							aria-label="small"
							valueLabelDisplay="auto"
							disabled={true}
						/>
					</span>
				</li>
			</ul>
		</div>
	)
}
