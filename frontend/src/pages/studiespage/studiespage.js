import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import "./studiespage.scss"

class StudiesPage extends React.Component {

  render() {
    return (
      <div>
        <Header />
          <div className="studies-wrapper">
            <div className="study-box">
              <div className="study-image">
                <img src="./images/logo-circle.png" />
              </div>
            <div className="study-info">
              <p>Technigo</p>
              </div>
            </div>
          </div>
        <Footer />

      </div>

    )
  }

}

export default StudiesPage
