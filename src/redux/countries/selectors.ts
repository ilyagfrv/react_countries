import { RootState } from 'redux/store'

export const selectStatus = (state: RootState) => state.countries.status
export const selectCountries = (state: RootState) => state.countries.list
export const selectCountryQuantity = (state: RootState) =>
  state.countries.list.length
