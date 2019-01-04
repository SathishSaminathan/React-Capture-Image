import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
import Camera from "./components/Camera/Camera";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header/>
          <Camera />
          {/* <Footer/> */}
        </Layout>
      </div>
    );
  }
}

export default App;
