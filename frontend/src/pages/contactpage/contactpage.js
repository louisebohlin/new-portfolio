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
        <Footer />
        
      </div>

    )
  }

}

export default ContactPage
