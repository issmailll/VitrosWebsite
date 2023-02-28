import React from "react";
import Analiz from "./components/Analiz/Analiz";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Servises from "./components/Servises/Servises";

function App() {
  return (
    <>
      <Header/>
      <Intro/>
      <Servises/>
      <Analiz/>
    </>
  );
}

export default App;
