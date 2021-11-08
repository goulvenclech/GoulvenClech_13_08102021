import React from "react"
import LoginForm from "../Components/SignIn/LoginForm"
/**
 * Contain a form to log in our app 
 */
export default function SignInPage() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>
          Sign In
        </h1>
        <LoginForm />
      </section>
    </main>
  )
}