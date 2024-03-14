import { FaArrowLeftLong } from 'react-icons/fa6'

import style from './Info.module.scss'
import { Country } from 'types/country'

export default function Info({
  name,
  nativeName,
  flag,
  capital,
  population,
  region,
  subregion,
  currencies = [],
  languages = [],
  borders = [],
}: Country) {
  return (
    <section className={style.container}>
      <button className={style.backButton}>
        <FaArrowLeftLong className={style.backIcon} />
        Back
      </button>

      <div className={style.content}>
        <img className={style.countryFlag} src={flag} alt='' />

        <div className={style.countryInfo}>
          <h3 className={style.countryName}>{name}</h3>

          <ul className={style.countryInfoList}>
            <li>
              <b>Native Name:</b> {nativeName}
            </li>
            <li>
              <b>Population:</b> {population}
            </li>
            <li>
              <b>Region:</b> {region}
            </li>
            <li>
              <b>Sub region:</b> {subregion}
            </li>
            <li>
              <b>Capital:</b> {capital}
            </li>
            <li>
              <b>Currency:</b>{' '}
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </li>
            <li>
              <b>Languages:</b>{' '}
              {languages.map((l) => (
                <span style={{ marginRight: '5px' }} key={l.name}>
                  {l.name}
                </span>
              ))}
            </li>
          </ul>

          <div className={style.border}>
            <h4 className={style.borderTitle}>Border countries:</h4>
            <ul className={style.borderList}>
              <li>Belarus</li>
              <li>China</li>
              <li>Kazahstan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
