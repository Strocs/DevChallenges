import ButtonWrapper from './components/ButtonWrapper'

function App() {
	return (
		<article className=' pl-10 my-auto align-middle h-full w-full'>
			<h1 className='text-2xl text-neutral-700 font-bold my-4'>Buttons</h1>
			<div>
				<section className='flex max-w-lg'>
					<ButtonWrapper name='<Button />' />
					<ButtonWrapper hoverAndFocus name='$:hover, $:focus' />
				</section>
				<section className='flex max-w-lg'>
					<ButtonWrapper variant='outline' name='<Button variant="outline" />' />
					<ButtonWrapper variant='outline' hoverAndFocus name='$:hover, $:focus' />
				</section>
				<section className='flex max-w-lg'>
					<ButtonWrapper variant='text' name='<Button variant="text" />' />
					<ButtonWrapper variant='text' hoverAndFocus name='$:hover, $:focus' />
				</section>
				<section className='flex'>
					<ButtonWrapper disableShadow color='primary' name='<Button disableShadow />' />
				</section>
				<section className='flex max-w-lg'>
					<ButtonWrapper disabled disableShadow name='<Button disabled />' />
					<ButtonWrapper disabled disableShadow variant='text' hoverAndFocus name='<Button variant="text" disabled />' />
				</section>
				<section className='flex max-w-3xl'>
					<ButtonWrapper color='primary' startIcon='add_shopping_cart' name='<Button startIcon="local_grocery_store" />' />
					<ButtonWrapper color='primary' endIcon='add_shopping_cart' name='<Button endIcon="local_grocery_store" />' />
				</section>
				<section className='flex max-w-2xl'>
					<ButtonWrapper size='sm' color='primary' name='<Button size="sm" />' />
					<ButtonWrapper size='md' color='primary' name='<Button size="md" />' />
					<ButtonWrapper size='lg' color='primary' name='<Button size="lg" />' />
				</section>
				<section className='flex max-w-4xl'>
					<ButtonWrapper color='default' name='<Button color="default" />' />
					<ButtonWrapper color='primary' name='<Button color="primary"  />' />
					<ButtonWrapper color='secondary' name='<Button color="secondary"  />' />
					<ButtonWrapper color='danger' name='<Button color="danger"  />' />
				</section>
				<section className='flex max-w-4xl items-end h-full'>
					<ButtonWrapper hoverAndFocus color='default' name='$:hover, $:focus' />
					<ButtonWrapper hoverAndFocus color='primary' />
					<ButtonWrapper hoverAndFocus color='secondary' />
					<ButtonWrapper hoverAndFocus color='danger' />
				</section>
			</div>
		</article>
	)
}

export default App
