import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import studiesJson from "./studies.json"
import "./studiespage.scss"

class StudiesPage extends React.Component {

  render() {
    const id = this.props.match.params.id
    const study = studiesJson.study[id - 1]

    return (
      <div>
        <Header />
        <div className="studies-wrapper">
          <div className="study-box">
            <div className="study-image">
              <img src={study.image}/>
            </div>
            <div className="study-info">
              <h2>{study.name}</h2>
              <p>{study.description}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    )
  }

}

export default StudiesPage
