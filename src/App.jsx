import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ConsultationPage from "./pages/ConsultationPage"
import HomePage from "./pages/HomePage"
import "./index.css"

const App = () => {
  const [theme, setTheme] = useState("light")
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
    setTheme(newTheme)
  }

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Navbar theme={theme} handleTheme={handleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/consults" element={<ConsultationPage />} />
        </Routes>
      </BrowserRouter>
      <Footer theme={theme} />
    </div>
  )
}
export default App
