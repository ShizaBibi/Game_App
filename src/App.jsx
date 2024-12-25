import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IPhone13141 from "./pages/IPhone13141.jsx";
import IPhone13142 from "./pages/IPhone13142.jsx";
import IPhone13143 from "./pages/IPhone13143.jsx";
import Rectangle3 from "./pages/Rectangle3.jsx";
import IPhone13145 from "./pages/IPhone13145.jsx";
import IPhone13146 from "./pages/IPhone13146.jsx";
import IPhone13147 from "./pages/IPhone13147.jsx";
import IPhone13148 from "./pages/IPhone13148.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IPhone13141 />} />
        <Route path="/IPhone13142" element={<IPhone13142 />} />
        <Route path="/IPhone13143" element={<IPhone13143 />} />
        <Route path="/Rectangle3" element={<Rectangle3 />} />
        <Route path="/IPhone13145" element={<IPhone13145 />} />
        <Route path="/IPhone13146" element={<IPhone13146 />} />
        <Route path="/IPhone13147" element={<IPhone13147 />} />
        <Route path="/IPhone13148" element={<IPhone13148 />} />
      </Routes>
    </Router>
  );
};

export default App;
