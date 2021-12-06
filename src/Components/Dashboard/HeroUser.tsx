import React, { useState } from "react"
import { baseURL } from "../../App"
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks"
import { updateUserProfile } from "../../Redux/Slices/ProfileSlice"
/**
 * Hero of user Dashboard, display a welcome message and a module to 
 * change user's name 
 */
export default function Hero() {
  // get all the data needed
  const userFirstName = useAppSelector(state => state.profile.firstName)
  const userLastName = useAppSelector(state => state.profile.lastName)
  const token = useAppSelector(state => state.login.token)
  // Is the user editing their name ?
  const [editing, setEditing] = useState(false)
  // store form data
  const [newFirstName, setNewFirstName] = useState(userFirstName)
  const [newLastName, setNewLastName] = useState(userLastName)
  const [serverError, setServerError] = useState(false)
  const dispatch = useAppDispatch()
  /**
   * Handle click on "Edit" and "Cancel" button
   */
  const handleClick = () => {
    setEditing(!editing)
  }
  /**
   * Handle the user's name edit
   */
  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault()
    console.log(token)
    // Reqyest the back end to change the user's name
    fetch(baseURL + "/api/v1/user/profile", {
      method: "PUT",
      headers: { Authorization: "Bearer " + token, "Content-Type": "application/json"},
      body: JSON.stringify({
        firstName: newFirstName,
        lastName: newLastName
      })
    })
    .then(async response => {
      const isJson = response.headers.get("content-type")?.includes("application/json")
      const data = isJson && await response.json()
      if (response.ok) {
        dispatch(updateUserProfile(data.body))
        setEditing(!editing)
      } else {
        console.error(response)
        setServerError(true)
      }
    })
    .catch(error => {
      console.error(error)
      setServerError(true)
    })
  }

  return (
    <div className="h-44 md:h-36 mb-8 text-center">
      <h1 className="text-2xl font-semibold text-gray-800">
        Welcome back
      </h1>
      {
        editing ? 
          <form className="flex flex-col gap-2 mt-2" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row mx-4 justify-center gap-2">
              <input type="text" className="p-2 rounded-sm border-2 border-gray-400 text-black" placeholder={userFirstName}
                onChange={e => setNewFirstName(e.target.value)} />
              <input type="text" className="p-2 rounded-sm border-2 border-gray-400 text-black" placeholder={userLastName}
                onChange={e => setNewLastName(e.target.value)} />
            </div>
            <div className="flex justify-center gap-2">
              <button type="submit" className="block w-24 p-2 font-bold bg-white border border-green-500 text-green-500">
                    Save 
              </button>
              <button className="block w-24 p-2 font-bold bg-white border border-green-500 text-green-500" onClick={e => handleClick()}>
                    Cancel 
              </button>
            </div>
          </form>
        :
          <div>
            <p className="text-lg my-3 text-black">
              {userFirstName} {userLastName}!
            </p>
            <button className="block mx-auto w-36 p-2 font-bold mt-4 bg-white border border-green-500 text-green-500" onClick={e => handleClick()}>
                  Edit Name 
            </button>
          </div>
      }
    </div>
  )
}