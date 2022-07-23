
import { ListItem, SavingSpinner } from '..';

export const List = ({ children, list, title, handleAddItem, hook, componentName }) => {
	return (
		<>
			<div>
				<h1 className="">{title}</h1>
				<SavingSpinner componentName={componentName} />
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
