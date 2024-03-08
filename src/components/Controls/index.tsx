import { FaArrowDownWideShort } from 'react-icons/fa6'
import style from './Controls.module.scss'

export default function Controls() {
  return (
    <section className={style.container}>
      <input
        className={style.input}
        type='text'
        placeholder='search country...'
      />

      {/* <label for='city-select'>Ваш город</label> */}
      <select className={style.select} name='region' id='city-select'>
        <option value=''>Filter by region</option>
        <option value='petersburg'>Europe</option>
        <option value='samara'>Asia</option>
        <option value='perm'>Africa</option>
        <option value='novosibirsk'>America</option>
      </select>
    </section>
  )
}
