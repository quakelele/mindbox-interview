import style from '../styles/Checkbox.module.scss'

type Props = {
   checked: boolean
   onChange: (checked: boolean) => void
}

export const Checkbox = ({ checked, onChange }: Props) => {
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
