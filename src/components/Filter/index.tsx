import React from 'react'
import { IoClose } from 'react-icons/io5'

import style from './Filter.module.scss'
import { Regions } from 'types/regions'

import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { selectRegion, selectSearch } from 'redux/filter/selectors'
import {
  setSearchCountry,
  resetSearchCountry,
  setSelectRegion,
} from 'redux/filter/slice'

const regions: Regions[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

export default function Filter() {
  const dispatch = useAppDispatch()
  const search = useSelector(selectSearch)
  const selectedRegion = useSelector(selectRegion)
  const [isVisibleSelectRegion, setIsVisibleSelectRegion] =
    React.useState(false)

  const handleSearchCountry = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setSearchCountry(e.currentTarget.value))
  }

  const handleSelectRegion = (region: Regions) => {
    dispatch(setSelectRegion(region))
  }

  const handleResetSearchCountry = () => {
    dispatch(resetSearchCountry())
  }

  return (
    <section className={style.container}>
      <div className={style.searchRegion}>
        <input
          className={style.input}
          type='text'
          placeholder='search country...'
          value={search}
          onChange={handleSearchCountry}
        />
        {search && (
          <IoClose
            className={style.resetIcon}
            onClick={handleResetSearchCountry}
          />
        )}
      </div>

      <div
        className={style.selectRegion}
        onClick={() => setIsVisibleSelectRegion(!isVisibleSelectRegion)}
      >
        <h4 className={style.selectRegionTitle}>
          {selectedRegion ? selectedRegion : 'Select Region'}
        </h4>

        {isVisibleSelectRegion && (
          <ul className={style.selectRegionList}>
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
