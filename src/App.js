import React from "react";
import Header from "./components/Header/Header";
import SideContent from "./components/SideContent/SideContent";
import Container from "./components/Main/Main";
import "./App.scss";

const App = () => (
  <div className="app">
    <Header />
    <SideContent />
    <Container />
  </div>
);

export default App;
