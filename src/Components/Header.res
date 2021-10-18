@react.component
let make = () => {
    <nav className="main-nav">
      <a className="main-nav-logo" onClick={_ => RescriptReactRouter.push("/")}>
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">
            {React.string("Argent Bank")}
        </h1>
      </a>
      <div>
        <a className="main-nav-item" onClick={_ => RescriptReactRouter.push("/sign-in")}>
          <i className="fa fa-user-circle"></i>
          {React.string("Sign In")}
        </a>
      </div>
    </nav>
}
