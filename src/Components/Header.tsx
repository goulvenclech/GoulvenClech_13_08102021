import React from "react"
import { Link, useHistory } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../Redux/Hooks"
import { userLogin, userLogoff } from "../Redux/Slices/LoginSlice"
/**
 * The header displayed in all the application
 */
export default function Footer() {
  const logged = useAppSelector(state => state.login.isLogged)
  const history = useHistory()
  const dispatch = useAppDispatch()
  const handleSubmit = (evt: React.SyntheticEvent) => {
    dispatch(userLogoff())
    history.push("/")
  }
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">
          Argent Bank
        </h1>
      </Link>
      <div>
      {
        logged === true ?
        <a className="main-nav-item cursor-pointer" onClick={handleSubmit}>
          <i className="fa fa-user-circle"></i>
          Sign out
        </a> :
        <Link className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      }
      </div>
    </nav>
  )
}
