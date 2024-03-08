import style from './List.module.scss'
import { Country } from 'components'

export default function List() {
  return (
    <ul className={style.container}>
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
    </ul>
  )
}
