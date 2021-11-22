import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useUserProfile } from "../../ApiHooks/userProfile"
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
      state = action.payload
    },
  }
})
// export everything
export const { updateUserProfile } = ProfileSlice.actions
export default ProfileSlice.reducer