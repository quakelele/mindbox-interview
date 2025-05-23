import { useState } from 'react'
import { FilterType, TodoTypes } from 'shared/_types'
import { FILTER } from 'shared/consts/filter'

export const useTodoManagement = () => {
   const [todos, setTodos] = useState<TodoTypes[]>([])
   const [inputValue, setInputValue] = useState('')
   const [filter, setFilter] = useState<FilterType>(FILTER.ALL)

   const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && inputValue.trim()) {
         setTodos([
            ...todos,
            { id: Math.random(), title: inputValue.trim(), completed: false },
         ])
         setInputValue('')
      }
   }

   const toggleTodo = (id: number) => {
      setTodos(prev =>
         prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
         )
      )
   }

   const removeTodo = (id: number) => {
      setTodos(prev => prev.filter(todo => todo.id !== id))
   }

   const clearCompleted = () => {
      setTodos(prev => prev.filter(todo => !todo.completed))
   }

   const filteredTodos = todos.filter(todo => {
      if (filter === FILTER.ACTIVE) return !todo.completed
      if (filter === FILTER.COMPLETED) return todo.completed
      return true
   })

   return {
      todos: filteredTodos,
      addTodo,
      toggleTodo,
      removeTodo,
      clearCompleted,
      setFilter,
      filter,
      inputValue,
      setInputValue,
   }
}
