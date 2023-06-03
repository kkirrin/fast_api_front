import React from "react"
import { Auth, Register, UserForm } from "./pages"
import { Navbar } from "./components"

const App = () => {
  return (
    <div>
      <Navbar />
      <UserForm />
    </div>

  )
}

export default App