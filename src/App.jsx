import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Agenda, Gallery, Home, Speakers, Sponsor } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      
    </div>
  );
}

export default App;
