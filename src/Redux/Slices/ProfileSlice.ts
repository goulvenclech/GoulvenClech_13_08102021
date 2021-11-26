import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { userProfile } from "../../dataTypes"
// Define the initial state using that type
const initialState: userProfile = {
  email: "",
  firstName: "",
  lastName: "",
  createdAt: "",
  updatedAt: "",
  id: ""
}
export const ProfileSlice = createSlice({
  name: "profile",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateUserProfile: (state, action: PayloadAction<userProfile>) => {
      const data = action.payload
      state.email = data.email,
      state.firstName = data.firstName,
      state.lastName = data.lastName,
      state.createdAt = data.createdAt,
      state.updatedAt = data.updatedAt,
      state.id = data.id
    },
  }
})
// export everything
export const { updateUserProfile } = ProfileSlice.actions
export default ProfileSlice.reducer