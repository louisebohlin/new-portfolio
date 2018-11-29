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
            <li>Tech</li>
            <li>Studies</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
