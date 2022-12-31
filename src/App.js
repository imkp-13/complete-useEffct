import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import UseEffect from "./UseEffect";
import Users from "./Users";

function App() {
  return (
    <Routes>
      <Route path="/" element=<UseEffect /> />
      <Route path="/users" element=<Users /> />
    </Routes>
  );
}

export default App;
