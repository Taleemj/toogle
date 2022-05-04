import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pages from "./components/Pages";

function App() {
  return (
    <div className="App">
          <Navbar />
          <Pages />
          <Footer />
    </div>
  );
}

export default App;
