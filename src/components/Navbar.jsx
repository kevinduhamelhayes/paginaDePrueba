import "./styles/Navbar.css"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
const pages = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Consultation", path: "/consultation" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
]
export default function Navbar({ theme }) {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="">
          <img className="logo" src="/public/harp.svg" alt="logo" />
        </a>
      </div>
      <div className="navbar-rigth">
        <ul>
          {pages.map((page) => (
            <li
              className={`navbar-li ${
                page.path === pathname ? "navbar-li-active" : ""
              }`}
              key={page.name}
            >
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
