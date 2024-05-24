import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { Country, SimplifiedCountry } from 'types'

export const fetchDetails = createAsyncThunk<Country, string>(
  'details/fetchDetails',
  async (url, thunkAPI) => {
    try {
      const { data } = await axios.get(url)
      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  }
)

export const fetchNeighborsByBorder = createAsyncThunk<
  SimplifiedCountry[],
  string
>('details/fetchNeighborsByBorder', async (url, thunkAPI) => {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error)
    }
  }
})
