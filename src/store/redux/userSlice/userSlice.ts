import { createAppSlice } from "store/createAppSlice"
import { usersSliceState, UserData } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const usersInitialState: usersSliceState = {
  users: [],
}

export const usersSlice = createAppSlice({
  //типизация экшена
  name: "USERS",
  initialState: usersInitialState,
  reducers: create => ({
    addUser: create.reducer(
      (state: usersSliceState, action: PayloadAction<UserData>) => {
        state.users = [...state.users, action.payload]
      },
    ),
  }),
  selectors: {
    users: (state: usersSliceState) => state.users,
  },
})

export const usersSliceActions = usersSlice.actions
export const usersSliceSelectors = usersSlice.selectors
