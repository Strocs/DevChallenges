import React from 'react'
import Button from './Button'

const ButtonWrapper = (props) => {
	return (
		<div className='flex flex-col w-full mx-2'>
			<code className='text-xs text-[#333] my-3 whitespace-nowrap'>{props.name}</code>
			<Button {...props} />
		</div>
	)
}

export default ButtonWrapper
