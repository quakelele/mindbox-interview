import { Todo } from 'entities/Todo'
import { Input } from 'shared/ui/Input'
import { useTodoManagement } from './model'
import { FILTER } from 'shared/consts/filter'
import style from './styles/TodoManagement.module.scss'
import { Button } from 'shared/ui/Button'

export const TodoManagement = () => {
   const {
      todos,
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
         <>
            <Input
               value={inputValue}
               onChange={setInputValue}
               onKeyUp={addTodo}
            />
            <Todo removeTodo={removeTodo} onChange={toggleTodo} todos={todos} />
         </>
         <div className={style.filters}>
            <p>{todos.length} items left</p>
            <>
               <Button
                  label="All"
                  isActive={filter === FILTER.ALL}
                  onClick={() => setFilter(FILTER.ALL)}
               />
               <Button
                  label="Active"
                  isActive={filter === FILTER.ACTIVE}
                  onClick={() => setFilter(FILTER.ACTIVE)}
               />
               <Button
                  label="Completed"
                  isActive={filter === FILTER.COMPLETED}
                  onClick={() => setFilter(FILTER.COMPLETED)}
               />
            </>
            <Button label="Clear completed" onClick={clearCompleted} />
         </div>
      </div>
   )
}
