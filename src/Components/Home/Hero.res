@react.component
let make = () => {
  <div className="hero">
    <section className="hero-content">
      <h2 className="sr-only">
        {React.string("Promoted Content")}
      </h2>
      <p className="subtitle">
        {React.string("No fees.")}
      </p>
      <p className="subtitle">
        {React.string("No minimum deposit.")}
      </p>
      <p className="subtitle">
        {React.string("High interest rates.")}
      </p>
      <p className="text">
        {React.string("Open a savings account with Argent Bank today!")}
      </p>
    </section>
  </div>
}
