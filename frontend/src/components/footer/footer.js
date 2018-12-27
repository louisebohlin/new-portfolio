import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import "./footer.scss"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-title">
          <Link to="/">
            <p>Louise Böhlin Pihlsgård</p>
          </Link>
        </div>
        <div className="footer-links">
          <ul>
            <Link to="/tech">
              <li>Tech</li>
            </Link>
            <Link to="/studies">
              <li>Studies</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
