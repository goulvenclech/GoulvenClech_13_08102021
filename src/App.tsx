import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./Redux/Store"
import { BrowserRouter as Router, Switch, Route }
 from "react-router-dom"
import "tailwindcss/tailwind.css"
import "../designs/css/main.css"
// import all pages & components
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import HomePage from "./Pages/Home"
import SignInPage from "./Pages/SignIn"
import DarshboardPage from "./Pages/Dashboard"
import NotFoundPage from "./Pages/NotFound"

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
          <Route path="/user">
            <DarshboardPage />
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
