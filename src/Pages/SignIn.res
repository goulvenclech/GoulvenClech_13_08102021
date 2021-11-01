/**
 * Sign in page of our application
 */
@react.component
let make = () => {

  let (username, setUsername) = React.useState(() => "")
  let (password, setPassword) = React.useState(() => "")

  // let lol = ApiHooks.useUserData()

  let test = (user: string, passw: string) => {
    Js.log(`${user} : ${passw}`)
  }

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
            <input type_="text" id="username" onChange={event => {
              let username = ReactEvent.Form.target(event)["value"]
              setUsername(_ => username)
            }}/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">
              {React.string("Password")}
            </label>
            <input type_="password" id="password" onChange={event => {
              let password = ReactEvent.Form.target(event)["value"]
              setPassword(_ => password)
            }}/>
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">
              {React.string("Remember me")}
            </label>
            <input type_="checkbox" id="remember-me" />
          </div>
          <a onClick={_ => test(username, password)} className="sign-in-button">
            {React.string("Sign In")}
          </a>
        </form>
      </section>
    </main>
    <Footer />
  </>
}