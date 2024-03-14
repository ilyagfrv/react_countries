import { RootState } from 'redux/store'

export const selectStatus = (state: RootState) => state.details.status
export const selectCountryDetails = (state: RootState) =>
  state.details.countryDetails
