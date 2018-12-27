import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import "./startpage.scss"

class StartPage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>

    )
  }

}

export default StartPage
