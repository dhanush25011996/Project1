import React from "react";
import './App.css'

import Inbox from "./components/email-verification/Inbox";
import Password from "./components/email-verification/Password";
import Region from "./components/email-verification/Region";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/password" element={<Password />} />
        <Route path="/region" element={<Region />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
