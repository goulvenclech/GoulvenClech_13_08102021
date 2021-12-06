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
    <nav className="flex my-1 mx-2 md:mx-5 items-center">
      <Link className="flex items-center" to="/">
        <img
          className="w-40 md:w-52"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">
          Argent Bank
        </h1>
      </Link>
      {
        logged === true ?
        <div className="ml-auto md:text-lg flex gap-4">
          <a className="no-underline font-bold hover:underline cursor-pointer" onClick={handleClickProfile}>
            <i className="mr-1 fa fa-user-circle"></i>
            {userFirstName}
          </a>
          <a className="no-underline font-bold hover:underline cursor-pointer" onClick={handleSignOut}>
            <i className="mr-1 fa fa-sign-out"></i>
            Sign out
          </a> 
        </div> :
        <Link className="ml-auto no-underline font-bold hover:underline" to="/sign-in">
          <i className="mr-1 fa fa-user-circle"></i>
          Sign In
        </Link>
      }
    </nav>
  )
}
