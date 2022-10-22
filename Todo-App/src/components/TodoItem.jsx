export const TodoItem = ({ todoProps, todoIndex, setCompleted, section, removeTodo }) => {
	const { completed, todo } = todoProps
	return (
		<li className='flex justify-between my-2'>
			<div className='flex items-center w-fit gap-2'>
				<input onClick={() => setCompleted(todoIndex)} className='h-5 w-5' defaultChecked={completed} type='checkbox' name='' id='' />
				<p className={`${completed && 'line-through text-slate-400'}`}>{todo}</p>
			</div>
			{section === 'Completed' && <span onClick={() => removeTodo(todoIndex)} className='material-icons text-slate-400 cursor-pointer hover:text-slate-600'>delete</span>}
		</li>
	)
}
