type account = {
  name: string,
  balance: string,
  description: string
}
/**
 * Show the balance of the user's bank accounts
 */
@react.component
let make = () => {
  let accountsArray: array<account> = [
      {name: "Argent Bank Checking (x8349)", balance: "$2,082.79", description: "Available"},
      {name: "Argent Bank Savings (x6712)", balance: "$10,928.42", description: "Available"},
      {name: "Argent Bank Credit Card (x8349)", balance: "$184.30", description: "Current"},
  ]
  <>
    <h2 className="sr-only">
      {React.string("Accounts")}
    </h2>
    {
      React.array(Belt.Array.mapWithIndex(accountsArray, (index, account) => {
        <section className="account" key={Belt.Int.toString(index)}>
          <div className="account-content-wrapper">
          <h3 className="account-title">
            {React.string(account.name)}
          </h3>
          <p className="account-amount">
            {React.string(account.balance)}
          </p>
          <p className="account-amount-description">
            {React.string(`${account.description} Balance`)}
          </p>
          </div>
          <div className="account-content-wrapper cta">
          <button className="transaction-button">
            {React.string("View transactions")}
          </button>
          </div>
        </section>
      }))
    }
  </>
}