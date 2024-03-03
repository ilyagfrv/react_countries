import { BsStars } from 'react-icons/bs'
import { IoSunny } from 'react-icons/io5'

import style from './Header.module.scss'

export default function Header() {
  return (
    <header className={style.header}>
      <h1>Explore the world</h1>

      <div>
        <IoSunny className={style.icon} />
        {/* <BsStars className={style.icon} /> */}
      </div>
    </header>
  )
}
