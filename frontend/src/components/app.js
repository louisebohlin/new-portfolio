import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import StartPage from "../pages/startpage/startpage.js"
import TechPage from "../pages/techpage/techpage.js"
import StudiesPage from "../pages/studiespage/studiespage.js"
import ContactPage from "../pages/contactpage/contactpage.js"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact="true" component={StartPage} />
          <Route path="/start" exact="true" component={StartPage} />
          <Route path="/tech" exact="true" component={TechPage} />
          <Route path="/studies" exact="true" component={StudiesPage} />
          <Route path="/contact" exact="true" component={ContactPage} />
        </div>
      </Router>
    )
  }

}

export default App
