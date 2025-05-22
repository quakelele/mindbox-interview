import {  useState } from 'react'
import { Filter, Todos } from 'shared/_types'

export const useTodoManagement = () => {
   const [todos, setTodos] = useState<Todos[]>([])
   const [inputValue, setInputValue] = useState('')
   const [filter, setFilter] = useState<Filter>('all')

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
      setTodos(
         todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
         )
      )
   }

   const removeTodo = (id: number) => {
      setTodos(todos.filter(todo => todo.id !== id))
   }

   const clearCompleted = () => {
      setTodos(todos.filter(todo => !todo.completed))
   }

   const filteredTodos = todos.filter(todo => {
      if (filter === 'active') return !todo.completed
      if (filter === 'completed') return todo.completed
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
