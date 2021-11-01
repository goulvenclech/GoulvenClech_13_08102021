import React from "react"
import Counter from "./Counter"

export default function Hero() {
  return (
    <div className="header">
      <h1>
        Welcome back<br />
        Tony Jarvis!
      </h1>
      <Counter />
      <button className="edit-button">
        Edit Name 
      </button>
    </div>
  )
}