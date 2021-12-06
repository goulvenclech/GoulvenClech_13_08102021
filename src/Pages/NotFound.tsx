import React from "react"
import Information from "../Components/Information"
/**
 * Used when the page is... well... not found !
 */
export default function NotFoundPage() {
  return (
    <main className="flex-1 py-10 bg-gray-300">
      <Information icon="⚠️" message="Error 404 : page not found" />
    </main>
  )
}