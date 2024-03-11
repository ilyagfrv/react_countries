import { Link } from 'react-router-dom'
import { IoSunny } from 'react-icons/io5'
import { GiNightSky } from 'react-icons/gi'

import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { setTheme } from 'redux/theme/slice'
import { selectTheme } from 'redux/theme/selectors'
import { resetFilters } from 'redux/filter/slice'

import style from './Header.module.scss'

export default function Header() {
  const dispatch = useAppDispatch()
  const theme = useSelector(selectTheme)

  const handleToggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

  return (
    <header className={style.header}>
      <Link className={style.title} to='/'>
        <h1 onClick={handleResetFilters}>Explore the world</h1>
      </Link>

      <div onClick={handleToggleTheme}>
        {theme === 'light' ? (
          <IoSunny className={style.lightIcon} />
        ) : (
          <GiNightSky className={style.darkIcon} />
        )}
      </div>
    </header>
  )
}
