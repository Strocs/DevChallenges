import { useState } from 'react'
import { Button } from './Button'

export const AddTodo = ({ onAddTodo }) => {
	const [inputValue, setInputValue] = useState('')

	const onSubmitTodo = e => {
		e.preventDefault()
		onAddTodo(inputValue)
		setInputValue('')
	}

	const onChangeValue = e => {
		setInputValue(e.target.value)
	}

	return (
		<form onSubmit={onSubmitTodo} className='flex w-full mt-6 gap-6 justify-between'>
			<input
				className='w-full rounded-xl border-2 solid border-slate-400 focus:outline-none focus:border-slate-500 focus:border-2 pl-6 box-border inline-block'
				placeholder='So, what we need to do?'
				type='text'
				onChange={onChangeValue}
				value={inputValue}
			/>
      <Button name='Add' />
		</form>
	)
}
