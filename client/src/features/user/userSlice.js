import { createSlice } from "@reduxjs/toolkit";

// create user slice
export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
