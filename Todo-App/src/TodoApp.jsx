import { useState } from 'react'
import { AddTodo } from './components/AddTodo.jsx'
import { Button } from './components/Button.jsx'
import { TodoItem } from './components/TodoItem'
import { useTodo } from './hooks/useTodo.jsx'

const SECTIONS = ['All', 'Active', 'Completed']

function App() {
	const [section, setSection] = useState('All')
	const { todoList, onAddTodo, onRemoveTodo, onRemoveAllTodo, onSetCompleted } = useTodo()

	const onChangeSection = (e, section) => {
		e.preventDefault()
		setSection(section)
	}

	return (
		<>
			<header className='pt-5'>
				<h2 className='text-4xl text-center'>
					<span className='text-rose-600 text-3xl'>#</span>to<span className='font-black text-rose-600 text-5xl'>do</span>_
				</h2>
			</header>

			<main className='flex flex-col mt-20 w-full max-w-3xl px-4'>

				<div className='flex px-16 justify-around items-center w-full font-semibold border-b-[1px] border-slate-400 border-solid'>
					{SECTIONS.map(section => {
						return (
							<a key={section} onClick={e => onChangeSection(e, `${section}`)} className=' p-2 w-28 rounded-xl text-center relative group' href='/'>
								{' '}
								<span className="after:content-[''] after:w-full after:h-1 after:bg-rose-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:rounded-t-3xl after:opacity-0 after:group-hover:opacity-100">
									{section}
								</span>
							</a>
						)
					})}
				</div>

				{section === 'Completed' ? '' : <AddTodo onAddTodo={onAddTodo} />}

				<ul className='ml-6 my-5'>
					{todoList.map((todoItem, index) => {
						if (section === 'Active' && todoItem.completed === false) {
							return <TodoItem key={todoItem.id} todoIndex={index} todoProps={todoItem} setCompleted={onSetCompleted} />
						} else if (section === 'Completed' && todoItem.completed === true) {
							return <TodoItem key={todoItem.id} todoIndex={index} todoProps={todoItem} setCompleted={onSetCompleted} section={'Completed'} removeTodo={onRemoveTodo} />
						} else if (section === 'All') {
							return <TodoItem key={todoItem.id} todoIndex={index} todoProps={todoItem} setCompleted={onSetCompleted} />
						}
					})}
				</ul>

				{section === 'Completed' ? <Button name='Delete All' onClick={onRemoveAllTodo} /> : ''}
				
			</main>
		</>
	)
}

export default App