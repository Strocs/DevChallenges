export const Button = ({name, onClick}) => {
	return (
		<button onClick={() => {onClick && onClick()}} className='bg-rose-600 py-3 px-8 rounded-xl max-w-xl text-white self-end ' type='submit'>
			{name}
		</button>
	)
}
