import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ConsultationPage from "./pages/ConsultationPage"
import HomePage from "./pages/HomePage"
import "./index.css"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import ContactPage from "./pages/ContactPage"

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
          <Route path="*" element={<h1>404: Not Found</h1>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
        </Routes>
      </BrowserRouter>
      <Footer theme={theme} />
    </div>
  )
}
export default App
