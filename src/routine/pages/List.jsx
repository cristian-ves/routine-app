
import { ListItem } from '../';

export const List = ({ children, list, title, handleAddItem, hook, save }) => {
	return (
		<>
			<div>
				<h1 className="text-3xl font-bold underline">{title}</h1>
				<button
					onClick={save}
				>
					<i className="fa-solid fa-floppy-disk"></i>
				</button>
			</div>
			<ul>

				{
					list?.map((event, i) => {

						return (
							<ListItem
								event={event}
								key={i}
								useList={hook}
							>
								{children}
							</ListItem>
						)
					})
				}

			</ul>
			<button
				onClick={handleAddItem}
			>
				<i className="fa-solid fa-plus"></i>
			</button>
		</>
	)
}
