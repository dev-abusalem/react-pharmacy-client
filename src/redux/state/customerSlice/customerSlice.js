import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../config/url-manager";

const fetchCustomers = createAsyncThunk("customer/fetchCustomer", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/medicine/customer`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const customerSlice = createSlice({
  name: "customers",
  initialState: {
    isLoading: false,
    customers: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customers = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; // Set the error message
      });
  },
});

export { fetchCustomers };
export default customerSlice.reducer;
