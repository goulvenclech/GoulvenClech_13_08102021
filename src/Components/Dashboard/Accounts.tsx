import React from "react"

interface Account {
  name: string,
  balance: string,
  description: string
}

export default function Accounts() {
  const accountsArray: Array<Account> = [
    {name: "Argent Bank Checking (x8349)", balance: "$2,082.79", description: "Available"},
    {name: "Argent Bank Savings (x6712)", balance: "$10,928.42", description: "Available"},
    {name: "Argent Bank Credit Card (x8349)", balance: "$184.30", description: "Current"},
  ]
  return (
    <section>
      <h2 className="sr-only">
        Accounts
      </h2>
      {
        accountsArray.map((account, index) => {
          return <section className="account" key={index}>
            <div className="account-content-wrapper">
            <h3 className="account-title">
              {account.name}
            </h3>
            <p className="account-amount">
              {account.balance}
            </p>
            <p className="account-amount-description">
              {`${account.description} Balance`}
            </p>
            </div>
            <div className="account-content-wrapper cta">
            <button className="transaction-button">
              View transactions
            </button>
            </div>
          </section>
        })
      }
    </section>
  )
}