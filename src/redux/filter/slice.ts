import { createSlice } from '@reduxjs/toolkit'

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
    setSelectRegion(state, action) {
      state.region = action.payload
    },
    resetSearchCountry(state) {
      state.search = ''
    },
    resetFilters() {
      return initialState
    },
  },
})

export const { setSearchCountry, setSelectRegion, resetSearchCountry, resetFilters } =
  filterSlice.actions

export default filterSlice.reducer
