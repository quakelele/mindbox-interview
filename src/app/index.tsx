import { TodoPage } from 'pages/TodoPage'
import style from 'shared/styles/app.module.scss'

export const App: React.FC = () => {
   return (
      <div title="For delete some todos, u need to doubleclick him ;P" className={style.wrapper}>
       <h1>Todos!</h1>
         <TodoPage  />
      </div>
   )
}
