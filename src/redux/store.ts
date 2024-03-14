import { configureStore } from '@reduxjs/toolkit'
import theme from './theme/slice'
import filter from './filter/slice'
import countries from './countries/slice'
import details from './details/slice'

export const store = configureStore({
  reducer: {
    theme,
    filter,
    countries,
    details,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
