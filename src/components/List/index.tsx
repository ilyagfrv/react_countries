import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'

import { fetchCountries } from 'redux/countries/asyncActions'
import { selectCountries } from 'redux/countries/selectors'
import { ALL_COUNTRIES } from 'config'

import style from './List.module.scss'
import { Country } from 'components'

export default function List() {
  const dispatch = useAppDispatch()
  const countries = useSelector(selectCountries)

  React.useEffect(() => {
    dispatch(fetchCountries(ALL_COUNTRIES))
  }, [])

  return (
    <ul className={style.container}>
      {countries.map((country, index) => (
        <Country key={index} {...country} />
      ))}
    </ul>
  )
}
