import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { userStatus } from "../../dataTypes"
// Define the initial state
const initialState: userStatus = {
  isLogged: false,
  token: ""
}
export const loginSlice = createSlice({
  name: "login",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<string>) => {
      state.isLogged = true,
      state.token = action.payload
    },
    userLogoff: state => {
      state.isLogged = false,
      state.token = ""
    }
  }
})
// export everything
export const { userLogin, userLogoff } = loginSlice.actions
export default loginSlice.reducer