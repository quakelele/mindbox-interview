import { TodoPage } from 'pages/TodoPage'
import style from 'shared/styles/app.module.scss'

export const App: React.FC = () => {
   return (
      <main
         className={style.wrapper}
         title="For delete some todos, u need to doubleclick ;P">
         <h1>Todos!</h1>
         <TodoPage />
      </main>
   )
}
