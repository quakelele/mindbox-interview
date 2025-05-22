import { Todos } from 'shared/_types'

import style from './styles/Todo.module.scss'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { TodoItem } from './ui/TodoItem'
type Props = {
   onChange: (arg: number) => void
   todos: Todos[]
   removeTodo: (arg: number) => void
}

export const Todo = ({ todos, onChange, removeTodo }: Props) => {
   const [parent] = useAutoAnimate()
   return (
      <div className={style.wrapper}>
         <ul ref={parent}>
            {todos.map(todo => (
               <TodoItem
                  key={todo.id}
                  removeTodo={removeTodo}
                  onChange={onChange}
                  {...todo}
               />
            ))}
         </ul>
      </div>
   )
}
