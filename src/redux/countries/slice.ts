import { createSlice } from '@reduxjs/toolkit'
import { Country, Status } from 'types'

import { fetchCountries } from './asyncActions'

type CountrySlice = {
  list: Country[]
  status: Status
}

const initialState: CountrySlice = {
  list: [],
  status: 'idle',
}

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.status = 'received'
      state.list = action.payload
    })
    builder.addCase(fetchCountries.rejected, (state) => {
      state.status = 'rejected'
    })
  },
})

export default countrySlice.reducer
