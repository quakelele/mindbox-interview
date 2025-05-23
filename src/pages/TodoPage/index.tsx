import { TodoManagement } from 'features/TodoManagement'
import style from './styles/TodoPage.module.scss'

export const TodoPage = () => {
   return (
      <div className={style.wrapper}>
         <TodoManagement />
      </div>
   )
}
