import React from 'react'
import { useAppSelector } from '../../Redux/Hooks'

export default function Counter() {
// The `state` arg is correctly typed as `RootState` already
  const logged = useAppSelector(state => state.login.isLogged)
  const token = useAppSelector(state => state.login.token)
  const test = useAppSelector(state => state.profile.firstName)

  return (
    <div>
        <p>Logged : {logged.toString()}</p>
        <p>Token : {token}</p>
        <p>First Name : {test}</p>
    </div>
  )
}