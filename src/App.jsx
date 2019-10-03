import React, { Component } from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";

class App extends Component {
  render = () => {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
        <texting />
      </div>
    );
  };
}

export default App;
