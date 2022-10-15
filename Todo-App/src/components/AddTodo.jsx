import React, { useState } from 'react'

export const AddTodo = () => {

  const [inputValue, setInputValue] = useState('')

	const onSubmitTodo = e => {
		e.preventDefault()
    setInputValue('')
	}

  const onChangeValue = (e) => {
    setInputValue(e.target.value)
  }

	return (
		<form onSubmit={onSubmitTodo} className='flex w-full mt-6 gap-6 justify-between'>
			<input
				className='w-full rounded-xl border-2 solid border-slate-400 focus:outline-none focus:border-slate-500 focus:border-2 pl-6 box-border'
				placeholder='So, what we need to do?'
				type='text'
        onChange={ onChangeValue }
        value={inputValue}
			/>
			<button className='bg-rose-600 py-4 px-6 rounded-xl w-28 text-slate-200' type='submit'>
				Add
			</button>
		</form>
	)
}
