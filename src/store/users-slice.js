import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTopUsers } from "../util/back/requests";

export const fetchInitialUsers = createAsyncThunk(
  "users/fetchInitialState",
  async (token) => {
    const users = await getTopUsers(token);
    return users;
  },
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInitialUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchInitialUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
