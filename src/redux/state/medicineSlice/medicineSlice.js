import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../config/url-manager";
const backendurl = process.env.BACKEND_URL;

const fetchMedicines = createAsyncThunk(
  "medicines/fetchMedicines",
  async () => {
    try {
      const api = axios.create({
        baseURL: BASE_URL,
      });
      const response = await api.get(`${BASE_URL}/medicine/medicines`);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const medicineSlice = createSlice({
  name: "medicines",
  initialState: {
    isLoading: false,
    medicines: [],
    error: null,
  },
  reducers: {
    // ... other reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMedicines.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMedicines.fulfilled, (state, action) => {
        state.isLoading = false;
        state.medicines = action.payload;
      })
      .addCase(fetchMedicines.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; // Set the error message
      });
  },
});

export { fetchMedicines };
export default medicineSlice.reducer;
