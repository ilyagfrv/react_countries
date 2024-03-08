import { Link } from 'react-router-dom'
import { IoSunny } from 'react-icons/io5'
import { GiNightSky } from 'react-icons/gi'
import { WiStars } from 'react-icons/wi'
import { BsFillMoonStarsFill } from 'react-icons/bs'

import style from './Header.module.scss'

type Props = {
  theme: string
  toggleTheme: () => void
}

export default function Header({ theme, toggleTheme }: Props) {
  return (
    <header className={style.header}>
      <Link className={style.title} to='/'>
        <h1>Explore the world</h1>
      </Link>

      <div onClick={toggleTheme}>
        {theme === 'light' ? (
          <IoSunny className={style.lightIcon} />
        ) : (
          <WiStars className={style.darkIcon} />
        )}
      </div>
    </header>
  )
}
