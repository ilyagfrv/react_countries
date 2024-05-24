import { Link } from 'react-router-dom'
import { GiGlobe } from 'react-icons/gi'
import sun from 'assets/images/sun.svg'
import moon from 'assets/images/moon.svg'

import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { setTheme } from 'redux/theme/slice'
import { selectTheme } from 'redux/theme/selectors'
import { resetFilters } from 'redux/filter/slice'

import style from './Header.module.scss'

export const Header = () => {
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
      <Link className={style.link} to='/'>
        <h1 className={style.title} onClick={handleResetFilters}>
          Explore the world
        </h1>
        <GiGlobe className={style.globe} />
      </Link>

      <div onClick={handleToggleTheme}>
        {theme === 'light' ? (
          <img className={style.icon} src={sun} alt='' />
        ) : (
          <img className={style.icon} src={moon} alt='' />
        )}
      </div>
    </header>
  )
}
