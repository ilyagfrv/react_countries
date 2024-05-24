import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { fetchNeighborsByBorder } from 'redux/details/asyncActions'
import { selectNeighbors, selectStatus } from 'redux/details/selectors'

import style from './Info.module.scss'
import InfoLoader from './InfoLoader'
import { Error } from 'components'
import { Country } from 'types'

export default function Info({
  id,
  name,
  nativeName,
  flag,
  capital,
  population,
  region,
  subregion,
  currency,
  languages = [],
  borders = [],
}: Country) {
  const dispatch = useAppDispatch()
  const neighbors = useSelector(selectNeighbors)
  const status = useSelector(selectStatus)
  const navigate = useNavigate()
  // const { id } = useParams()

  React.useEffect(() => {
    if (borders.length) {
      dispatch(
        fetchNeighborsByBorder(
          `https://aa5531b9abfac193.mokky.dev/countries?_select=id,name`
        )
      )
    }
  }, [borders, dispatch])

  return (
    <section className={style.container}>
      {status === 'rejected' && <Error />}
      {status === 'loading' ? (
        <InfoLoader />
      ) : (
        <>
          <button className={style.backBtn} onClick={() => navigate(-1)}>
            <FaArrowLeftLong className={style.backIcon} />
            Back
          </button>

          <div className={style.content}>
            <img className={style.flagImg} src={`/flags/${flag}`} alt='' />

            <div className={style.info}>
              <h3 className={style.country}>{name}</h3>

              <ul className={style.infoList}>
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
                  <b>Currency:</b> {currency}
                </li>
                <li>
                  <b>Languages:</b>{' '}
                  {languages.map((lang, i) => (
                    <span key={i}>{lang}</span>
                  ))}
                </li>
              </ul>

              <div className={style.border}>
                {!!borders.length && (
                  <h4 className={style.borderTitle}>Border countries:</h4>
                )}

                {!borders.length ? (
                  <p className={style.borderSubtitle}>
                    This country has no neighbors
                  </p>
                ) : (
                  <ul className={style.borderList}>
                    {neighbors.map((border) => (
                      <li
                        key={border.id}
                        onClick={() => navigate(`/countries/${border.id}`)}
                      >
                        {border.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
