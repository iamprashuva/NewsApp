import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/general"
            element={<News key="general" pageSize={15} country="us" category="general" />}
          />

          <Route
            exact
            path="/sports"
            element={<News key="sports" pageSize={15} country="us" category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={<News key="technology" pageSize={15} country="us" category="technology" />}
          />
          <Route
            exact
            path="/health"
            element={<News key="health" pageSize={15} country="us" category="health" />}
          />

          <Route
            exact
            path="/science"
            element={<News key="science" pageSize={15} country="us" category="science" />}
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News key="entertainment" pageSize={15} country="us" category="entertainment" />
            }
          />
        </Routes>
      </Router>
    );
  }
}
export default App;
