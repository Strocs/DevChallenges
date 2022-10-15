import { useState } from 'react'
import { Active } from './components/Active'
import { AddTodo } from './components/AddTodo'
import { All } from './components/All'
import { Completed } from './components/Completed'

function App() {
	const [section, setSection] = useState('All')
	const [todoList, setTodoList] = useState([
		{
			completed: false,
			todo: 'Do this Challenge',
		},
		{ completed: true, todo: 'Preparar las cosas para mañana' },
	])

	const sections = ['All', 'Active', 'Completed']

	const onChangeSection = (e, section) => {
		e.preventDefault()
		setSection(section)
	}

  const onAddTodo = (inputValue) => {
    setTodoList(inputValue, ...todoList)
  }

	return (
		<>
			<header className='pt-5'>
				<h2 className='text-4xl text-center'>
					<span className='text-rose-600 text-3xl'>#</span>to<span className='font-black text-rose-600 text-5xl'>do</span>_
				</h2>
			</header>
			<main className='mt-20 w-full max-w-3xl'>
				<div className='flex gap-2 justify-center items-center font-semibold border-b-[1px] border-slate-400 border-solid'>
					{sections.map(section => {
						return (
							<a key={section} onClick={e => onChangeSection(e, `${section}`)} className=' p-2 w-fit
 rounded-xl text-center relative group' href='/'>
								{' '}
								<span className="after:content-[''] after:w-full after:h-1 after:bg-rose-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:rounded-t-3xl after:opacity-0 after:group-hover:opacity-100">
									{section}
								</span>
							</a>
						)
					})} 
				</div>
				{section === 'Completed' ? '' : <AddTodo onAddTodo={onAddTodo}/>}
				<ul>
					{section === 'All' && <All todoList={todoList} />}
					{section === 'Active' && <Active todoList={todoList} />}
					{section === 'Completed' && <Completed todoList={todoList}/>}
				</ul>
			</main>
		</>
	)
}

export default App
