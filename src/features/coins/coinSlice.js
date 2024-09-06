import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCoin, fetchCoins } from "./coinService";

const coinSlice = createSlice({
  name: "coin",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    coins: [],
    coin: null,
    message: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.coins = action.payload;
      })
      .addCase(getCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCoin.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getCoin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.coin = action.payload;
      })
      .addCase(getCoin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default coinSlice.reducer;

// GET COINS

export const getCoins = createAsyncThunk("FETCH/COINS", async (_, thunkAPI) => {
  try {
    return await fetchCoins();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getCoin = createAsyncThunk("FETCH/COIN", async (id, thunkAPI) => {
  try {
    return await fetchCoin(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
