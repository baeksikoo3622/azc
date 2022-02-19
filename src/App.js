import React from "react";
import Create from "./routes/Create";
import Home from "./routes/Home";
import Study from "./routes/Study";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/create" element={<Create />} />
        <Route path="/study" element={<Study />} />
      </Routes>
    </div>
  );
}

export default App;
