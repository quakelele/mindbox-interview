import { TodoManagement } from 'features/TodoManagement'
import $ from './styles/TodoPage.module.scss'

export const TodoPage = () => {
   return (
      <div className={$.wrapper}>
         <div>
            
            <TodoManagement />
         </div>
         
      </div>
   )
}
