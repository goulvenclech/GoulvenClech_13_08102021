import React from "react"
import { Link, useHistory } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../Redux/Hooks"
import { userLogoff } from "../Redux/Slices/LoginSlice"
/**
 * The header displayed in all the application
 */
export default function Footer() {
  const logged = useAppSelector(state => state.login.isLogged)
  const userFirstName = useAppSelector(state => state.profile.firstName)
  const history = useHistory()
  const dispatch = useAppDispatch()
  const handleSignOut = (evt: React.SyntheticEvent) => {
    dispatch(userLogoff())
    history.push("/")
  }
  const handleClickProfile = (evt: React.SyntheticEvent) => {
    history.push("/dashboard")
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
      {
        logged === true ?
        <div>
          <a className="main-nav-item cursor-pointer" onClick={handleClickProfile}>
            <i className="fa fa-user-circle"></i>
            {userFirstName}
          </a>
          <a className="main-nav-item cursor-pointer" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign out
          </a> 
        </div> :
        <Link className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      }
    </nav>
  )
}
