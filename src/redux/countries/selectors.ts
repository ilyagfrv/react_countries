import { RootState } from 'redux/store'

export const selectCountries = (state: RootState) => state.countries.list
