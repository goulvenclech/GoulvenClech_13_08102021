/**
 * Show the name of the user and allow to change it
 */
@react.component
let make = () => {
    <div className="header">
      <h1>
        {React.string("Welcome back")}<br />
        {React.string("Tony Jarvis!")}
      </h1>
      <button className="edit-button">
        {React.string("Edit Name")} 
      </button>
    </div>
}