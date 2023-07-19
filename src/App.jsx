import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Link2 from "./Routes/Link2"
import Link1 from "./Routes/Link1"
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
          <Route path="/" element={<Link2 />} />
          <Route path="/Link1" element={<Link1 />} />
        </Routes>
      </BrowserRouter>
      <Footer theme={theme} />
    </div>
  )
}
export default App
