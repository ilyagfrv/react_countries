import { Link } from 'react-router-dom'

import style from './Card.module.scss'
import { Country } from 'types'

export default function Card({
  name,
  flags,
  population,
  region,
  capital,
}: Country) {
  return (
    <Link to={`country/${name}`}>
      <li className={style.country}>
        <img className={style.image} src={flags.png} alt='' />

        <div className={style.content}>
          <h3 className={style.title}>{name}</h3>

          <ul className={style.info}>
            <li>
              <span>Population:</span> {population}
            </li>
            <li>
              <span>Region:</span> {region}
            </li>
            <li>
              <span>Capital:</span> {capital}
            </li>
          </ul>
        </div>
      </li>
    </Link>
  )
}
