import style from '../styles/Checkbox.module.scss'

interface CheckboxProps {
   checked: boolean
   onChange: (checked: boolean) => void
}

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
   return (
      <label className={style.checkbox}>
         <input
            type="checkbox"
            checked={checked}
            onChange={e => onChange(e.target.checked)}
         />
         <span className={style.custom}></span>
      </label>
   )
}
