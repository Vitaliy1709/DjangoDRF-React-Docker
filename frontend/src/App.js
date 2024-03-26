import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { render } from "react-dom";
import DataLoader from "./components/loaders/DataLoader";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataLoader />} />        
        <Route path="/users" element={<DataLoader isUserList />} />
        <Route path="/groups" element={<DataLoader isUserList={false} />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};


const container = document.getElementById("app");
render(<App />, container);

export default App;
