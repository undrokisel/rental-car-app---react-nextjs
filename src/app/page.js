"use client"

import { useContext } from "react";
import Home from "./home/page";
import { AuthContext } from "./context/auth";


export default function App() {

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

  return (
    <>
      {
        <Home />
      }
    </>
  )
}
