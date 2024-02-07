import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

class App extends Component {
  apiKey = 'a365611f918742089cf8bb57aca5c8d9';
  pageSize = 15;
  state={
    progress: 0
  }
  setProgress= (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar />
        <Routes>
        <Route
            exact
            path="/"
            element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general"
             />}
          />
          <Route
            exact
            path="/general"
            element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general"
             />}
          />

          <Route
            exact
            path="/sports"
            element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology" />}
          />
          <Route
            exact
            path="/health"
            element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health" />}
          />

          <Route
            exact
            path="/science"
            element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science" />}
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />
            }
          />
        </Routes>
      </Router>
    );
  }
}
export default App;
