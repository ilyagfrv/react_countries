import { RootState } from 'redux/store'

export const selectCountries = (state: RootState) => state.countries.list

export const selectVisibleCountries = (
  state: RootState,
  { search = '', region = '' }
) => {
  return state.countries.list.filter(
    (country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      country.region.includes(region)
  )
}
