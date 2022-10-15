
export const Active = ({ todoList }) => {
	return (
		<>
			{todoList.map(todoItem => {
				const { completed, todo } = todoItem
				if (completed === false) {
					return (
						<li className='flex'>
							<input type='checkbox' name='' id='' />
							<p>{todo}</p>
						</li>
					)
				}
			})}
		</>
	)
}
