import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const backendurl = process.env.BACKEND_URL;

const fetchMedicines = createAsyncThunk(
  "medicines/fetchMedicines",
  async () => {
    try {
      const api = axios.create({
        baseURL: backendurl,
      });
      const response = await api.get("/medicine/medicines");

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
