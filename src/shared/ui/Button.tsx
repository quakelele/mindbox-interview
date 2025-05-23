import style from '../styles/Button.module.scss'

type Props = {
   label: string
   isActive?: boolean
   onClick: () => void
}

export const Button = ({ label, isActive, onClick }: Props) => (
   <div className={style.wrapper}>
      <button onClick={onClick} className={isActive ? style.active : ''}>
         {label}
      </button>
   </div>
)
