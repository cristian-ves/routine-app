
import { ListItem } from '../';

export const List = ({ children, list, title, handleAddItem, hook }) => {
	return (
		<>
			<h1 className="text-3xl font-bold underline">{title}</h1>
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
