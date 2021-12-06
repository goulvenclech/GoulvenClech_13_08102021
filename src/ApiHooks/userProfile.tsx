import { useEffect, useState } from "react"
import { baseURL } from "../App"
import { emptyProfile } from "../dataTypes"
/**
 * With a correct token, fetch the user profile end point of our API 
 */
export const useUserProfile = (token: string) => {
    const [isLoading, setIsLoading] = useState(false)
    const [apiData, setApiData] = useState(emptyProfile)
    const [serverError, setServerError] = useState(false)
  
    useEffect(() => {
      setIsLoading(true)
      fetch(baseURL + "/api/v1/user/profile", {
        method: "POST",
        headers: { Authorization: "Bearer " + token, accept: "application/json"}
      })
      .then(async response => {
        const isJson = response.headers.get("content-type")?.includes("application/json")
        const data = isJson && await response.json()
        if (response.ok) {
          setApiData(data.body)
          setIsLoading(false)
        } else {
          console.error(response)
          setServerError(true)
        }
      })
      .catch(error => {
        console.error(error)
        setServerError(true)
      })
    }, [])
  
    return { isLoading, apiData, serverError }
  }
  