import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all menu data
export const menu_data = createAsyncThunk("menuData", async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/menu");
    console.log(res.data);
    return res.data.data; // Assuming 'data' contains the menu items
  } catch (error) {
    throw error;
  }
});


export const dataInfo = createAsyncThunk("menuItems", async ({name}) => {
    console.log(name,"edded");
    
  try {
    const res = await axios.get(
      `http://localhost:4000/api/menu/menuitem/${name}` // Using name in query string
    );
    console.log(res.data.data,"lkdmkdmclec");
    return res.data.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  menuData: [],
  items: [],
  loading: false,
  reject: "",
};

const menu_slice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(dataInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(dataInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(dataInfo.rejected, (state, action) => {
        state.reject = action.error.message || "Failed to fetch menu items";
        state.loading = false;
      })
      // menu data
      .addCase(menu_data.fulfilled, (state, action) => {
        state.loading = false;
        state.menuData = action.payload; // Directly assigning payload if it's an array
      })
      .addCase(menu_data.pending, (state) => {
        state.loading = true;
      })
      .addCase(menu_data.rejected, (state, action) => {
        state.reject = action.error.message || "Failed to fetch menu data";
        state.loading = false;
      });
  },
});

export default menu_slice.reducer;
