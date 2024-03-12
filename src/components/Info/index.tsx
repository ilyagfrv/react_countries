import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'

import style from './Info.module.scss'
import flag from '../../assets/images/russia.jpg'

export default function Info(props) {
  const {
    name,
    nativeName,
    flagg,
    capital,
    population,
    region,
    subregion,
    currencies = [],
    languages = [],
    borders = [],
    push,
  } = props
  const navigate = useNavigate()

  return (
    <section className={style.container}>
      <button className={style.backButton} onClick={() => navigate(-1)}>
        <FaArrowLeftLong className={style.backIcon} />
        Back
      </button>

      <div className={style.content}>
        <img className={style.countryFlag} src={flag} alt='' />

        <div className={style.countryInfo}>
          <h3 className={style.countryName}>Russia</h3>

          <ul className={style.countryInfoList}>
            <li>
              <b>Native Name:</b> Russian Federation
            </li>
            <li>
              <b>Population:</b> 145000000
            </li>
            <li>
              <b>Region:</b> Europe
            </li>
            <li>
              <b>Sub region:</b> Some
            </li>
            <li>
              <b>Capital:</b> Moscow
            </li>
            <li>
              <b>Currency:</b> Ruble
            </li>
            <li>
              <b>Languages:</b> Russian
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
