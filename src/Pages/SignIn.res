/**
 * Sign in page of our application
 */
@react.component
let make = () => {
  <>
    <Header />
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>
          {React.string("Sign In")}
        </h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">
              {React.string("Username")}
            </label>
            <input type_="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">
              {React.string("Password")}
            </label>
            <input type_="password" id="password" />
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">
              {React.string("Remember me")}
            </label>
            <input type_="checkbox" id="remember-me" />
          </div>
          /* PLACEHOLDER DUE TO STATIC SITE */
          <a onClick={_ => RescriptReactRouter.push("/user")} className="sign-in-button">
            {React.string("Sign In")}
          </a>
          /* SHOULD BE THE BUTTON BELOW */
          /* <button className="sign-in-button">Sign In</button> */
          /*  */
        </form>
      </section>
    </main>
    <Footer />
  </>
}