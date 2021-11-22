/**
 * Main data structures, interfaces and types used by our app
 */
export interface userStatus {
  isLogged: boolean,
  token: string
}
export interface userProfile {
  email: string,
  firstName: string,
  lastName: string,
  createdAt: string,
  updatedAt: string,
  id: string
}
export const emptyProfile: userProfile = {
    email: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    updatedAt: "",
    id: ""
}