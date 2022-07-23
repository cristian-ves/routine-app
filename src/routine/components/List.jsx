
import { ListItem } from '..';

export const List = ({ children, list, title, handleAddItem, hook, spinner }) => {
	return (
		<>
			<div>
				<h1 className="">{title}</h1>
				{spinner}
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
