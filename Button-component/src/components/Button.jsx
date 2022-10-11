import React from 'react'

const Button = ({ buttonText = 'Default', variant, disableShadow = false, disabled = false, startIcon, endIcon, size = 'md', color = 'default', hoverAndFocus = false }) => {
	console.log(variant === 'text')
	return (
		<button
			disabled={disabled || hoverAndFocus}
			className={`
					flex
					font-medium
					font
					text-sm
					rounded-md
					max-w-fit
					${
						color === 'primary'
							? 'text-white bg-blue-600 hover:bg-blue-800 focus:bg-blue-800 disabled:bg-blue-800'
							: color === 'secondary'
							? 'text-white bg-gray-600 hover:bg-gray-800 focus:bg-gray-800 disabled:bg-gray-800'
							: color === 'danger'
							? 'text-white bg-red-600 hover:bg-red-800 focus:bg-red-800 disabled:bg-red-800'
							: color === 'default'
							? 'text-neutral-600 bg-neutral-300 hover:bg-neutral-400 focus:bg-neutral-400 disabled:bg-neutral-400'
							: ''
					} 

					${
						variant === 'text' && disabled
							? 'bg-transparent shadow-transparent disabled:!bg-transparent'
							: variant === 'text'
							? '!bg-transparent shadow-transparent !text-blue-500 hover:!bg-blue-100 focus:!bg-blue-100 disabled:!bg-blue-100'
							: ''
					}

					${
						variant === 'outline' && disabled
							? 'bg-transparent shadow-transparent border border-neutral-200 disabled:!bg-transparent'
							: variant === 'outline'
							? '!bg-transparent shadow-transparent border  border-blue-500 !text-blue-500 hover:!bg-blue-100 focus:!bg-blue-100 disabled:!bg-blue-100'
							: ''
					}

					${size === 'sm' ? 'py-[0.375rem] px-3' : size === 'lg' ? 'py-3 px-[1.375rem]' : 'py-2 px-4'} 

					${disableShadow ? '' : 'drop-shadow-md'}

					${disabled ? 'disabled:bg-neutral-200 !text-neutral-400' : ''}
				`}
		>
			{startIcon && <span className='material-icons text-base h-0 mr-3' >{startIcon}</span>}
			{disabled ? `Disabled` : color === 'secondary' ? 'Secondary' : color === 'danger' ? 'Danger' : buttonText}
			{endIcon && <span className='material-icons text-base h-0 ml-3' >{endIcon}</span>}
		</button>
	)
}

export default Button
