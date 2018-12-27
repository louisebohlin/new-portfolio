import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import "./contactpage.scss"

class ContactPage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="contact-wrapper">
          <div className="contact-info">
            <ul>
              <li><a href="mailto:louisebp@gmail.com" target="_blank" >louisebp@gmail.com</a></li>
              <li>+46 707425010</li>
            </ul>
            <ul>
              <li>Skånegatan 80</li>
              <li>116 37 Stockholm</li>
            </ul>
            <ul>
              <li><a href="https://www.linkedin.com/in/louise-b%C3%B6hlin-pihlsg%C3%A5rd-96687010b/" target="_blank">Linkedin</a></li>
              <li><a href="https://www.instagram.com/louisebohlin/" target="_blank">Instagram</a></li>
              <li><a href="https://www.facebook.com/louisebp" target="_blank">Facebook</a></li>
            </ul>
          </div>
          <Footer />
        </div>
      </div>

    )
  }

}

export default ContactPage
