import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route }
 from "react-router-dom"
import "tailwindcss/tailwind.css"
import '../designs/css/main.css'
// import all pages & components
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import HomePage from "./Pages/Home"
import SignInPage from "./Pages/SignIn"
import UserPage from "./Pages/User"
import NotFoundPage from "./Pages/NotFound"

/**
 * Contain the router logic of our App !
 */
ReactDOM.render(
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/sign-in">
            <SignInPage />
          </Route>
          <Route path="/user">
            <UserPage />
          </Route>
          <Route path="/*">
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer />
      </Router>,
  document.getElementById('root')
)
