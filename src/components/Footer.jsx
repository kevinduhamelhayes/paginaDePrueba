import "./styles/Footer.css"
import { Link, useLocation } from "react-router-dom"
const pages = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Consultation", path: "/consultation" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
]

export default function Footer({ theme }) {
  const { pathname } = useLocation()
  return (
    <nav className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <ul className="footer-ul">
            {pages.map((page) => (
              <li
                className={`footer-li ${
                  page.path === pathname ? "footer-li-active" : ""
                }`}
                key={page.name}
              >
                <Link to={page.path}>{page.name}</Link>
              </li>
            ))}
          </ul>
          <h2 className="footer-address">Address</h2>
          <p className="footer-address-p">
            Sharp Managers, Plot -6, Block -18, Model Colony,Karachi, 75100, PK,
          </p>
          <div className="footer-bottom">
            <a href="/">2023 Sharp Managers</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
