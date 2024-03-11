import style from './Country.module.scss'
import { Country } from 'types/country'

export default function Country({
  name: { common },
  flags: { png },
  population,
  region,
  capital,
}: Country) {
  return (
    <li className={style.country}>
      <img className={style.image} src={png} alt='' />

      <div className={style.content}>
        <h3 className={style.title}>{common}</h3>

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
  )
}
