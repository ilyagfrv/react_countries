import { RootState } from 'redux/store'

export const selectFilters = (state: RootState) => state.filter
export const selectSearch = (state: RootState) => state.filter.search
export const selectRegion = (state: RootState) => state.filter.region
