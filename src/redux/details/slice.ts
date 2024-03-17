import { createSlice } from '@reduxjs/toolkit'
import { Country, Status } from 'types'

import { fetchDetails, fetchNeighborsByBorder } from './asyncActions'

type DetailSlice = {
  countryDetails: Country | null
  neighbors: string[]
  status: Status
}

const initialState: DetailSlice = {
  countryDetails: null,
  neighbors: [],
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
    builder.addCase(fetchNeighborsByBorder.fulfilled, (state, action) => {
      state.neighbors = action.payload.map((country) => country.name)
    })
  },
})

export const { clearDetails } = detailSlice.actions

export default detailSlice.reducer
