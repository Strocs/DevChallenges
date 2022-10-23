import { useEffect, useState } from 'react'

export const useTodo = () => {
	const [todoList, setTodoList] = useState([])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todoList))
	}, [todoList])

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem('todos'))
		if (todos) {
			setTodoList(todos)
		}
	}, [])

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
