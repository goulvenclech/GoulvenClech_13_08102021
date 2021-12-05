import React from "react"

export default function Hero() {
  return (
    <div className="overflow-hidden relative h-80 md:h-96">
      <img className="relative w-full sm:bottom-1/4 lg:bottom-1/2"
        src="./img/bank-tree.jpeg" />
      <section className="absolute top-0 right-0 w-60 h-80 bg-white p-8 text-left mx-auto my-0
        md:right-24 md:h-auto md:w-80 md:my-16">
        <h2 className="sr-only">
          Promoted Content
        </h2>
        <p className="font-bold text-base md:text-xl m-0">
          No fees.
        </p>
        <p className="font-bold text-base md:text-xl m-0">
          No minimum deposit.
        </p>
        <p className="font-bold text-base md:text-xl m-0">
          High interest rates.
        </p>
        <p className="mb-0 mt-2 text-sm md:text-lg">
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  )
}
