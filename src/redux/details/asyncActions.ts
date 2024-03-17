import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { Country } from 'types'

export const fetchDetails = createAsyncThunk<Country[], string>(
  'details/fetchDetails',
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

export const fetchNeighborsByBorder = createAsyncThunk<Country[], string>(
  'details/fetchNeighborsByBorder',
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
