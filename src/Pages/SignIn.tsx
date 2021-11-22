import React from "react"
import LoginForm from "../Components/SignIn/LoginForm"
import { useAppSelector } from '../Redux/Hooks'
/**
 * Contain a form to log in our app 
 */
export default function SignInPage() {
  const logged = useAppSelector(state => state.login.isLogged)

  return (
    <main className="main bg-dark">
      {
        !logged ? 
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>
            Sign In
          </h1>
          <LoginForm />
        </section>
        :
          <div className="text-center py-48 text-white text-xl">
            <p className="text-3xl pb-2">✅</p>
            <p>Vous êtes déjà connecté</p>
          </div>
      }
    </main>
  )
}