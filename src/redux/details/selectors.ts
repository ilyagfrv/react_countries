import { RootState } from 'redux/store'

export const selectStatus = (state: RootState) => state.details.status
export const selectNeighbors = (state: RootState) => state.details.neighbors
export const selectCountryDetails = (state: RootState) =>
  state.details.countryDetails
