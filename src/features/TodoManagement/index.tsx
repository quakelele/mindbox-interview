import { Input } from 'shared/ui/Input'
import { useTodoManagement } from './model'
import { Todo } from 'entities/Todo'
import style from './styles/TodoManagement.module.scss'

export const TodoManagement = () => {
   const {
      todos: filteredTodos,
      addTodo,
      toggleTodo,
      removeTodo,
      clearCompleted,
      setFilter,
      filter,
      inputValue,
      setInputValue,
   } = useTodoManagement()

   return (
      <div className={style.wrapper}>
         <div>
            <Input
               placeholder="What needs to be done?"
               value={inputValue}
               onChange={setInputValue}
               onKeyUp={addTodo}
            />
            <Todo
               removeTodo={removeTodo}
               onChange={toggleTodo}
               todos={filteredTodos}
            />
         </div>
         <div className={style.tabs}>
            <span>{filteredTodos.length} items left</span>
            <div>
               <button
                  onClick={() => setFilter('all')}
                  className={filter === 'all' ? style.active : ''}>
                  All
               </button>
               <button
                  onClick={() => setFilter('active')}
                  className={filter === 'active' ? style.active : ''}>
                  Active
               </button>
               <button
                  onClick={() => setFilter('completed')}
                  className={filter === 'completed' ? style.active : ''}>
                  Completed
               </button>
            </div>
            <button onClick={clearCompleted}>Clear completed</button>
         </div>
      </div>
   )
}
