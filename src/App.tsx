import React from "react";
import { Navigation, HeroSection } from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <HeroSection />
      </main>
      <div className="bottom-line"></div>
    </div>
  );
}

export default App;
