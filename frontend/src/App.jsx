import React from "react";
import './App.css'
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import FactionPage from "./pages/FactionPage";
import Ruststalkers from "./pages/Ruststalkers";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route  path="/" element={<HomePage />}/>
        <Route  path="/faction" element={<FactionPage />}/>        
        <Route  path="/ruststalkers" element={<Ruststalkers />}/>
      </Routes>
    </div>
  );
};

export default App;
