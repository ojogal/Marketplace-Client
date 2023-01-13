import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter.js'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
