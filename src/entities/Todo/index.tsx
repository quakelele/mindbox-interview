import { Todos } from 'shared/_types'

import style from './styles/Todo.module.scss'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Checkbox } from './ui/Checkbox'
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
               <li  onDoubleClick={() => removeTodo(todo.id)} key={todo.id}>
                  <Checkbox
                     checked={todo.completed}
                     onChange={() => onChange(todo.id)}
                  />
                  <p className={todo.completed ? style.completed : ''}>
                     {todo.title}
                  </p>
               </li>
            ))}
         </ul>
      </div>
   )
}
