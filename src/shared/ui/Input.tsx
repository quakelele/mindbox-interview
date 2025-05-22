import $ from '../styles/Input.module.scss'

interface InputProps {
   value: string
   onChange: (value: string) => void
   onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void
   placeholder?: string
}

export const Input = ({
   value,
   onChange,
   onKeyUp,
   placeholder,
}: InputProps) => {
   return (
      <div className={$.wrapper}>
         <input
            value={value}
            onKeyUp={onKeyUp}
            onChange={e => onChange(e.target.value)}
            type="text"
            placeholder={placeholder}
         />
      </div>
   )
}
