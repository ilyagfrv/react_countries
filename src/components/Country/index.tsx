import style from './Country.module.scss'
import image from 'assets/images/russia.jpg'

export default function Country() {
  return (
    <li className={style.country}>
      <img className={style.image} src={image} alt='Country' />

      <div className={style.content}>
        <h3 className={style.title}>Country</h3>

        <ul className={style.info}>
          <li>
            <span>Population:</span> 1000000
          </li>
          <li>
            <span>Region:</span> Europe
          </li>
          <li>
            <span>Capital:</span> City
          </li>
        </ul>
      </div>
    </li>
  )
}
