import componentsImg from "./assets/components.png";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept";

import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton.jsx";

import { useState } from "react";

import { EXAMPLES } from "./data.js";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
