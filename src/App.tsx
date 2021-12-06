import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./Redux/Store"
import { BrowserRouter as Router, Switch, Route }
 from "react-router-dom"
import "tailwindcss/tailwind.css"
// import all pages & components
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import HomePage from "./Pages/Home"
import SignInPage from "./Pages/SignIn"
import DashboardPage from "./Pages/Dashboard"
import NotFoundPage from "./Pages/NotFound"
// define base URL for the API back end
export const baseURL = "http://localhost:3001" 
/**
 * Contain the router logic of our App !
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/sign-in">
            <SignInPage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/*">
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
