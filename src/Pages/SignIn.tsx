import React from "react"
import LoginForm from "../Components/SignIn/LoginForm"
import { useAppSelector } from '../Redux/Hooks'
/**
 * Contain a form to log in our app 
 */
export default function SignInPage() {
  const logged = useAppSelector(state => state.login.isLogged)

  return (
    <main className="flex-1 py-10 bg-gray-300">
      {
        !logged ? 
        <section className="box-border bg-white w-80 mx-auto p-8">
          <i className="fa fa-user-circle text-7xl"></i>
          <h1 className="text-xl font-bold my-2">
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