import React from "react";
import Analiz from "./components/Analiz/Analiz";
import Clinic from "./components/Clinic/Clinic";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import News from "./components/News/News";
import Reg from "./components/Reg/Reg";
import Servises from "./components/Servises/Servises";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Servises />
      <Analiz />
      <Clinic />
      <News />
      <Reg />
      <Map />
      <Footer/>
    </>
  );
}

export default App;
