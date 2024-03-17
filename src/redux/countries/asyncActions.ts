import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { Country } from 'types'

export const fetchCountries = createAsyncThunk<Country[], string>(
  'countries/fetchCountries',
  async (url, thunkAPI) => {
    try {
      const { data } = await axios.get(url)
      return data
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  }
)
