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

      <select className={style.select} name='region'>
        <option value=''>Filter by Region</option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </section>
  )
}
