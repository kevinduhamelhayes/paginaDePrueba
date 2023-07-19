import "./stylesComponents/Navbar.css"
export default function Navbar({ theme }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <ul>
            <li className="sin-dif">
              <img
                className="logo"
                src="/home/kevindev/workspace/react001/proyects/profile/paginaDePrueba/public/harp.svg"
                alt="logo"
              />
            </li>
            <li className="navbar-li">
              <a href="#"> </a>
            </li>
          </ul>
        </div>
        <div className="navbar-rigth">
          <ul>
            <li className="navbar-li">
              <a href="#">Free Consultation</a>
            </li>
            <li className="navbar-li">
              {" "}
              <a href="#">menu</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
