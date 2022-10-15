import React from 'react'

export const Completed = ({todoList}) => {
	return (
		<>
			{todoList.map(todoItem => {
				const { completed, todo } = todoItem
				if (completed === true) {
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
