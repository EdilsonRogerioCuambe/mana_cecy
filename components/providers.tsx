"use client"

import { useEffect, useState } from "react"
import { SplashScreen } from "./splash-screen"

export function Providers({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // If you want to show it only once per session, uncomment below:
    // const hasSeenSplash = sessionStorage.getItem("hasSeenSplash")
    // if (hasSeenSplash) {
    //   setShowSplash(false)
    // }
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
    // sessionStorage.setItem("hasSeenSplash", "true")
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {children}
    </>
  )
}
