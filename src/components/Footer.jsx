import "./styles/Footer.css"

export default function Footer({ theme }) {
  return (
    <nav className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <ul className="footer-ul">
            <li className="footer-li">home</li>
            <li className="footer-li">services</li>
            <li className="footer-li">consultation</li>
            <li className="footer-li">contact</li>
            <li className="footer-li">about</li>
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
