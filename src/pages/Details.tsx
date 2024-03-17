import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { fetchDetails } from 'redux/details/asyncActions'
import { selectCountryDetails } from 'redux/details/selectors'
import { clearDetails } from 'redux/details/slice'

import { Info } from 'components'

export default function Details() {
  const dispatch = useAppDispatch()
  const details = useSelector(selectCountryDetails)

  const { name } = useParams()

  React.useEffect(() => {
    dispatch(fetchDetails(`https://restcountries.com/v2/name/${name}`))

    return () => {
      dispatch(clearDetails())
    }
  }, [name, dispatch])

  return <Info {...details} />
}
