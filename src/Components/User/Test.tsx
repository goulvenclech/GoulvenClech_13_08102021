import React from 'react'
import { useAppSelector, useAppDispatch } from '../../Redux/Hooks'
import { userLogin, userLogoff } from "../../Redux/Slices/LoginSlice"

export default function Counter() {
// The `state` arg is correctly typed as `RootState` already
  const logged = useAppSelector(state => state.login.isLogged)
  const token = useAppSelector(state => state.login.token)

  return (
    <div>
        <p>Logged : {logged.toString()}</p>
        <p>Token : {token}</p>
    </div>
  )
}