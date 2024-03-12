import { useNavigate, useParams } from 'react-router-dom'

import { Info } from 'components'

export default function Details() {
  const { name } = useParams()
  const navigate = useNavigate()

  const currentCountry = {}

  return (
    <div>{currentCountry && <Info push={navigate} {...currentCountry} />}</div>
  )
}
