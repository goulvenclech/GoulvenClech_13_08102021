import React from "react"
import { useAppSelector } from "../../Redux/Hooks"
/**
 * Hero of user Dashboard, display a welcome message and a module to 
 * change user's name 
 */
export default function Hero() {
  const userFirstName = useAppSelector(state => state.profile.firstName)
  const userLastName = useAppSelector(state => state.profile.lastName)
  return (
    <div className="header">
      <h1>
        Welcome back<br />
        {userFirstName} {userLastName}!
      </h1>
      <button className="edit-button">
        Edit Name 
      </button>
    </div>
  )
}