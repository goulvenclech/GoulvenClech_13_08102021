import React from "react"
/**
 * Used to displayed error or loading messages around the app
 */
export default function Information(props: Props) {
  return (
    <div className="text-center py-48 font-bold text-xl">
        <p className="text-3xl pb-2">{props.icon}</p>
        <p>{props.message}</p>
    </div>
  )
}
interface Props {
  icon: string,
  message: string
}
