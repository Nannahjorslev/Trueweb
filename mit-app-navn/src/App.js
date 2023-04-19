import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Nav from './components/Nav';
import Sidefod from './components/Sidefod';
import Forside from './pages/Forside';
import Omos from './pages/Omos';
import Hjemmesider from './pages/Hjemmesider';
import Kontakt from './pages/Kontakt';




function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="/omos" element={<Omos />} />
          <Route path="/hjemmesider" element={<Hjemmesider />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </BrowserRouter>
      <Sidefod/>
    </div>
  );
}

export default App;