import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Country } from 'types/country'

const initialState = {
  search: '',
  region: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchCountry(state, action) {
      state.search = action.payload
    },
    setSelectRegion(state, action: PayloadAction<Country['region']>) {
      state.region = action.payload
    },
    resetSearchCountry(state) {
      state.search = ''
    },
    resetSelectRegion(state) {
      state.region = ''
    },
    resetFilters() {
      return initialState
    },
  },
})

export const {
  setSearchCountry,
  setSelectRegion,
  resetSearchCountry,
  resetSelectRegion,
  resetFilters,
} = filterSlice.actions

export default filterSlice.reducer
