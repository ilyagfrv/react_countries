import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { useAppDispatch } from 'redux/redux-hook'
import { fetchCountries } from 'redux/countries/asyncActions'
import { selectStatus, selectVisibleCountries } from 'redux/countries/selectors'
import { selectFilters } from 'redux/filter/selectors'

import { ALL_COUNTRIES } from 'config'

import style from './List.module.scss'
import { Country, Skeleton } from 'components'

export default function List() {
  const dispatch = useAppDispatch()
  const filters = useSelector(selectFilters)
  const status = useSelector(selectStatus)
  const countriesList = useSelector((state: RootState) =>
    selectVisibleCountries(state, filters)
  )

  React.useEffect(() => {
    dispatch(fetchCountries(ALL_COUNTRIES))
  }, [])

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ))
  const countries = countriesList.map((country, index) => (
    <Country key={index} {...country} />
  ))

  return (
    <>
      <ul className={style.container}>
        {status === 'loading' ? skeletons : countries}
      </ul>
    </>
  )
}
