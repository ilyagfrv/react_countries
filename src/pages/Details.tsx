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
  const { id } = useParams()

  React.useEffect(() => {
    dispatch(
      fetchDetails(`https://aa5531b9abfac193.mokky.dev/countries/${id}`)
    )

    return () => {
      dispatch(clearDetails())
    }
  }, [id, dispatch])

  return <Info {...details} />
}
