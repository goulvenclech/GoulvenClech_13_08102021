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
          return <section key={index} className="flex flex-col md:flex-row justify-between items-center 
            border border-black bg-white w-4/5 mx-auto mb-4 px-6 py-4 box-border text-left">
            <div className="w-full flex-1">
              <h3>
                {account.name}
              </h3>
              <p className="text-4xl my-2 font-bold">
                {account.balance}
              </p>
              <p>
                {`${account.description} Balance`}
              </p>
            </div>
            <div className="flex-1 w-full">
              <button className="block w-full md:w-72 lg:w-80 md:ml-auto p-2 text-lg font-bold mt-4 bg-green-500 text-white">
                View transactions
              </button>
            </div>
          </section>
        })
      }
    </section>
  )
}