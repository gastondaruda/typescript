import {Routes, Route, Navigate, HashRouter } from "react-router-dom";
import NavbarComponent from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home";
import Component from "./Components/Component/Component";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Component" element={<Component />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
