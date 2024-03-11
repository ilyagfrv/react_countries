import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './theme/slice'
import countriesReducer from './countries/slice'
import filterReducer from './filter/slice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
    filter: filterReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
