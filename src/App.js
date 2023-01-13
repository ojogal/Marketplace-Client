import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter.js'
import NavBar from "./components/Navbar.js";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
