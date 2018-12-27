import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import "./techpage.scss"

class TechPage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Footer />
        
      </div>

    )
  }

}

export default TechPage
