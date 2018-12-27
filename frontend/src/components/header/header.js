import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import "./header.scss"

class Header extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-title">
          <Link to="/">
            <h3>Louise Böhlin Pihlsgård</h3>
          </Link>
        </div>
        <div className="header-links">
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

export default Header
