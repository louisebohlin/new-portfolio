import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import StartPage from "../pages/startpage/startpage.js"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact="true" component={StartPage} />
        </div>
      </Router>
    )
  }

}

export default App
