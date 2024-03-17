import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Regions } from 'types/regions'

type FilterSlice = {
  search: string
  region: Regions | ''
}

const initialState: FilterSlice = {
  search: '',
  region: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchCountry(state, action: PayloadAction<string>) {
      state.search = action.payload
    },
    setSelectRegion(state, action: PayloadAction<Regions | ''>) {
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
