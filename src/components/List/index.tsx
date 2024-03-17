import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { fetchCountries } from 'redux/countries/asyncActions'
import {
  selectStatus,
  selectCountries,
  selectCountryQuantity,
} from 'redux/countries/selectors'
import { selectFilters } from 'redux/filter/selectors'

import style from './List.module.scss'
import { Country } from 'types'
import { Card, CardLoader, Error } from 'components'

export default function List() {
  const dispatch = useAppDispatch()
  const { search, region } = useSelector(selectFilters)
  const countriesList = useSelector(selectCountries)
  const quantity = useSelector(selectCountryQuantity)
  const status = useSelector(selectStatus)

  React.useEffect(() => {
    if (!quantity) {
      dispatch(
        fetchCountries(
          'https://restcountries.com/v2/all?fields=name,capital,flags,population,region'
        )
      )
    }
  }, [quantity, dispatch])

  const filteredCountries = countriesList.filter((country: Country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(search.toLowerCase())
    const matchesRegion = country.region.includes(region)
    return matchesSearch && matchesRegion
  })

  const skeletons = [...new Array(8)].map((_, index) => (
    <CardLoader key={index} />
  ))
  const countries = filteredCountries.map((country: Country, index: number) => (
    <Card key={index} {...country} />
  ))

  return (
    <ul className={style.container}>
      {status === 'rejected' && <Error />}
      {status === 'loading' ? skeletons : countries}
    </ul>
  )
}
