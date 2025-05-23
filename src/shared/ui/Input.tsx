import style from '../styles/Input.module.scss'

type Props = {
   value: string
   onChange: (value: string) => void
   onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const Input = ({ value, onChange, onKeyUp }: Props) => {
   return (
      <div className={style.wrapper}>
         <input
            value={value}
            onKeyUp={onKeyUp}
            onChange={e => onChange(e.target.value)}
            type="text"
            placeholder="What needs to be done?"
         />
      </div>
   )
}
