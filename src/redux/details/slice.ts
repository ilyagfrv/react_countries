import { createSlice } from '@reduxjs/toolkit'
import { Country } from 'types/country'
import { Status } from 'types/status'

import { fetchDetails } from './asyncActions'

type DetailSlice = {
  countryDetails: Country | null
  status: Status
}

const initialState: DetailSlice = {
  countryDetails: null,
  status: 'idle',
}

const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.status = 'received'
      state.countryDetails = action.payload[0]
    })
    builder.addCase(fetchDetails.rejected, (state) => {
      state.status = 'rejected'
    })
  },
})

export const { clearDetails } = detailSlice.actions

export default detailSlice.reducer
