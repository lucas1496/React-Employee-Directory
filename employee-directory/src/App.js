import React from "react";
import './App.css';
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    // Created empty tag as "parent", components wouldn't render without it
    <>
    <Header />
    <MainContainer />
    </>
  );
}

export default App;
