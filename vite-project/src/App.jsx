import React from "react";
import Analiz from "./components/Analiz/Analiz";
import Clinic from "./components/Clinic/Clinic";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import News from "./components/News/News";
import Servises from "./components/Servises/Servises";

function App() {
  return (
    <>
      <Header/>
      <Intro/>
      <Servises/>
      <Analiz/>
      <Clinic/>
      <News/>
    </>
  );
}

export default App;
