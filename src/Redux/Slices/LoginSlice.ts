import { createSlice, PayloadAction } from "@reduxjs/toolkit"
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
      state.isLogged = false,
      state.token = ""
    }
  }
})
// export everything
export const { userLogin, userLogoff } = loginSlice.actions
export default loginSlice.reducer