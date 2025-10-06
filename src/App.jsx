import React from "react";
import "./styles/App.css";
import { HeroSection } from "./components/HeroSection";
import { WhatIsEneisoft } from "./components/WhatIsEneisoft";
import { CarruselUNO } from "./components/CarruselUNO/CarruselUNO";
import { CarruselInvitados } from "./components/CarruselInvitados/CarruselInvitados";

function App() {

  const eventos = [
    "NetWorking",
    "Workshops",
    "Keynotes",
    "Programación Competitiva",
    "Hackathon",
  ];

  return (
    <div>
      <HeroSection />
      <WhatIsEneisoft />
      <CarruselUNO items={eventos} width="360px" height="200px" />
      <CarruselInvitados />
    </div>
  );
}

export default App;
