import { Checkbox } from 'shared/ui/Checkbox'
import style from '../styles/Todo.module.scss'

type Props = {
   id: number
   title: string
   completed: boolean
   onChange: (arg: number) => void
   removeTodo: (arg: number) => void
}

export const TodoItem = ({
   id,
   completed,
   title,
   removeTodo,
   onChange,
}: Props) => {
   return (
      <li onDoubleClick={() => removeTodo(id)} key={id}>
         <Checkbox checked={completed} onChange={() => onChange(id)} />
         <p className={completed ? style.completed : ''}>{title}</p>
      </li>
   )
}
