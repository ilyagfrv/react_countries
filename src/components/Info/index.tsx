import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { selectNeighbors } from 'redux/details/selectors'
import { fetchNeighborsByBorder } from 'redux/details/asyncActions'

import style from './Info.module.scss'
import { Country } from 'types'
import React from 'react'

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
  const dispatch = useAppDispatch()
  const neighbors = useSelector(selectNeighbors)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (borders.length) {
      dispatch(
        fetchNeighborsByBorder(
          `https://restcountries.com/v2/alpha?codes=${borders}.join(',')`
        )
      )
    }
  }, [borders, dispatch])

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
              <b>Subregion:</b> {subregion}
            </li>
            <li>
              <b>Capital:</b> {capital}
            </li>
            <li>
              <b>Currency:</b>{' '}
              {currencies.map((curr) => (
                <span key={curr.code}>{curr.name}</span>
              ))}
            </li>
            <li>
              <b>Languages:</b>{' '}
              {languages.map((lang) => (
                <span key={lang.name}>{lang.name}</span>
              ))}
            </li>
          </ul>

          <div className={style.border}>
            <h4 className={style.borderTitle}>Border countries:</h4>
            <ul className={style.borderList}>
              {neighbors.map((border) => (
                <li key={border} onClick={() => navigate(`/country/${border}`)}>
                  {border}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
