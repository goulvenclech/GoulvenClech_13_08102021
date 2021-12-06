import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { baseURL } from "../../App"
import { useAppDispatch } from '../../Redux/Hooks'
import { userLogin } from "../../Redux/Slices/LoginSlice"
/**
 * The sign in form of our bank. 
 */
export default function LoginForm() {
  // Change while the use is typing
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // Needed for handleSubmit
  const [error, setError] = useState("")
  const history = useHistory()
  const dispatch = useAppDispatch()
  // handleSubit post request on login back end
  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault()
    fetch(baseURL + "/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        email: username,
        password: password 
      })
    })
    .then(async response => {
      const isJson = response.headers.get("content-type")?.includes("application/json")
      const data = isJson && await response.json()
      if (response.ok) {
        dispatch(userLogin(data.body.token))
        history.push("/dashboard")
      } else {
        console.error(response)
        setError(data.message)
      }
    })
    .catch(error => {
      console.error(error)
      setError(error.toString())
    })
  }
  // a simple login form 
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col text-left px">
        {
          error === "" ?
          "" :
          <span className="font-bold text-sm text-center text-red-500 mb-3 mt-2">
            {error}
          </span>
        }
        <label className="font-bold" htmlFor="username">
          Username
        </label>
        <input className="p-1 text-xl mb-2 mt-1 border-2 border-gray-400" type="text" id="username"
          onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="flex flex-col text-left mb-4">
        <label className="font-bold" htmlFor="password">
          Password
        </label>
        <input className="p-1 text-xl mb-2 mt-1 border-2 border-gray-400" type="password" id="password"
          onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="flex">
        <label className="font-bold" htmlFor="remember-me">
          Remember me
        </label>
        <input className="p-1 text-xl ml-2 border-2 border-gray-400" type="checkbox" id="remember-me" />
      </div>
      <button type="submit" className="block w-full p-2 text-lg font-bold mt-4 bg-green-500 text-white">
        Sign In
      </button>
    </form>
  )
}