import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Country, SimplifiedCountry, Status } from 'types'

import { fetchDetails, fetchNeighborsByBorder } from './asyncActions'

type DetailSlice = {
  countryDetails: Country | null
  neighbors: SimplifiedCountry[]
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
    builder.addCase(
      fetchDetails.fulfilled,
      (state, action: PayloadAction<Country>) => {
        state.status = 'received'
        state.countryDetails = action.payload
      }
    )
    builder.addCase(fetchDetails.rejected, (state) => {
      state.status = 'rejected'
    })
    builder.addCase(
      fetchNeighborsByBorder.fulfilled,
      (state, action: PayloadAction<SimplifiedCountry[]>) => {
        state.neighbors = action.payload.filter((country) =>
          state.countryDetails?.borders.includes(country.name)
        )
      }
    )
  },
})

export const { clearDetails } = detailSlice.actions

export default detailSlice.reducer
