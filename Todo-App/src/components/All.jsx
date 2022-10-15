import React from 'react'
export const All = ( {todoList} ) => {
  return (
    <ul>
      {todoList.map(todoItem => {
        const {completed, todo } = todoItem
        return (
          <li className='flex'>
            <input type="checkbox" name="" id="" />
            <p>{todo}</p>       
          </li>
        )
      })}
    </ul>
  )
}
