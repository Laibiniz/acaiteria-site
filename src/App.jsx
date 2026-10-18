import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Sobre from "./Pages/Sobre";
import Contatos from "./Pages/Contatos";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </HashRouter>
  );
}

export default App;