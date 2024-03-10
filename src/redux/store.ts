import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './theme/slice'
import countriesReducer from './countries/slice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
