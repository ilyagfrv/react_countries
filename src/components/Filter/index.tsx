import React from 'react'
import { IoClose } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { selectFilters } from 'redux/filter/selectors'
import {
  setSearchCountry,
  setSelectRegion,
  resetSearchCountry,
  resetSelectRegion,
} from 'redux/filter/slice'

import style from './Filter.module.scss'
import { Regions } from 'types'

const regions: Regions[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

export default function Filter() {
  const dispatch = useAppDispatch()
  const { search, region } = useSelector(selectFilters)
  const [isVisibleSelectRegion, setIsVisibleSelectRegion] =
    React.useState(false)
  const ref = React.useRef<HTMLUListElement>(null)

  const handleSearchCountry = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setSearchCountry(e.currentTarget.value))
  }

  const handleSelectRegion = (region: Regions) => {
    dispatch(setSelectRegion(region))
  }

  const handleResetSearchCountry = () => {
    dispatch(resetSearchCountry())
  }

  const handleResetSelectRegion = () => {
    dispatch(resetSelectRegion())
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsVisibleSelectRegion(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <section className={style.container}>
      <div className={style.searchCountry}>
        <input
          className={style.inputSearchCountry}
          type='text'
          placeholder='search country...'
          value={search}
          onChange={handleSearchCountry}
        />
        {search && (
          <IoClose
            className={style.resetSearchCountry}
            onClick={handleResetSearchCountry}
          />
        )}
      </div>

      <div
        className={style.selectRegion}
        onClick={() => setIsVisibleSelectRegion(!isVisibleSelectRegion)}
      >
        <h4 className={style.selectRegionTitle}>
          {region ? region : 'Select Region'}
        </h4>

        {region && (
          <IoClose
            className={style.resetSelectRegion}
            onClick={handleResetSelectRegion}
          />
        )}

        {isVisibleSelectRegion && (
          <ul className={style.selectRegionList} ref={ref}>
            {regions.map((region, index) => (
              <li key={index} onClick={() => handleSelectRegion(region)}>
                {region}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
