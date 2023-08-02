import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://restcountries.com/v3.1/all';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something wrong');
    }
  },
);

const initialState = {
  countries: [],
  isLoading: false,
  error: null,
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.countries = action.payload.map((country) => ({
        id: uuidv4(),
        name: country.name.official,
        capital: country.capital,
        region: country.region,
        flags: country.flags.png,
        population: country.population,
        area: country.area,
      }));
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default countrySlice.reducer;
