import React, { useState } from "react"
import { useHistory } from "react-router-dom"
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
    fetch("http://localhost:3001/api/v1/user/login", {
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
      setError(error)
    })
  }
  // a simple login form 
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
      {
        error === "" ?
        "" :
        <p>{error}</p>
      }
      <label htmlFor="username">
        Username
      </label>
      <input type="text" id="username"
        onChange={e => setUsername(e.target.value)} />
      </div>
      <div className="input-wrapper">
      <label htmlFor="password">
        Password
      </label>
      <input type="password" id="password"
        onChange={e => setPassword(e.target.value)} />
      </div>
      <div className="input-remember">
      <label htmlFor="remember-me">
        Remember me
      </label>
      <input type="checkbox" id="remember-me" />
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  )
}