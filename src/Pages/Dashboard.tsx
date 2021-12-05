import React from "react"
import Hero from "../Components/Dashboard/HeroUser"
import Accounts from "../Components/Dashboard/Accounts"
import { useAppDispatch, useAppSelector } from '../Redux/Hooks'
import { useUserProfile } from "../ApiHooks/userProfile"
import Information from "../Components/Information"
import { updateUserProfile } from "../Redux/Slices/ProfileSlice"
/**
 * User dashboard, display the user's bank account data 
 */
export default function DashboardPage() {
  const logged = useAppSelector(state => state.login.isLogged)
  const token = useAppSelector(state => state.login.token)
  // fetch userProfile to load fresh data
  const { isLoading, serverError, apiData } = useUserProfile(token)
  // save userProfile with Redux
  const dispatch = useAppDispatch()
  dispatch(updateUserProfile(apiData))

  return (
    <main className="flex-1 py-10 bg-gray-300">
      { !logged ? <Information icon="🔒" message="Vous devez être connecté" /> :
        <>
          { serverError ? <Information icon="⚠️" message="Une erreur serveur est survenue" /> :
            <>
              { isLoading ? <Information icon="👀" message="Chargement de votre profil" /> : 
                  <>
                    <Hero />
                    <Accounts />
                  </>
              }
            </>
          }
        </>
      }
    </main>
  )
}