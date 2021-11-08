import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../Store"
// Define a type for the slice state
interface LoginState {
  isLogged: boolean,
  token: string
}
// Define the initial state using that type
const initialState: LoginState = {
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
      state.isLogged = true,
      state.token = ""
    }
  }
})
// export everything
export const { userLogin, userLogoff } = loginSlice.actions
export default loginSlice.reducer