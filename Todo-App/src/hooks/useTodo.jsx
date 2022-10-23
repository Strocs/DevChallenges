import { useEffect, useState } from 'react'

export const useTodo = () => {
	
	// Evaluation of the default value of the state, if there is nothing in local storage I need to set as [], or map method will be broke
	// otherwise, I need to set the default value as current value in local storage.
	// I know that the get items from localStorage need to be in useEffect, but when I did that and set default value of state as [], wherever the page refresh, state change to default value and update localStorage values.

	const defaultStateValue = () => {
		const getLocalStorage = JSON.parse(localStorage.getItem('todos'))

		if (!getLocalStorage) {
			return []
		}
		return getLocalStorage
	}

	const [todoList, setTodoList] = useState(defaultStateValue())

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todoList))
	}, [todoList])

	const onAddTodo = inputValue => {
		let newId
		if (todoList[0]) {
			newId = todoList[0].id + 1
		} else {
			newId = 1
		}

		inputValue.length > 0 && setTodoList([{ id: newId, completed: false, todo: inputValue }, ...todoList])
	}

	const onRemoveTodo = todoIndex => {
		const todoListCopy = [...todoList]
		todoListCopy.splice(todoIndex, 1)

		setTodoList(todoListCopy)
	}

	const onRemoveAllTodo = () => {
		const todosActives = []
		todoList.map(todo => {
			if (todo.completed === false) {
				todosActives.push(todo)
			}
		})

		setTodoList(todosActives)
	}

	const onSetCompleted = todoIndex => {
		const todoListCopy = [...todoList]
		todoListCopy[todoIndex].completed = !todoListCopy[todoIndex].completed
		setTodoList(todoListCopy)
	}

	return { todoList, onAddTodo, onRemoveTodo, onRemoveAllTodo, onSetCompleted }
}
