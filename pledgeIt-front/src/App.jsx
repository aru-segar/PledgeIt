import React from 'react';
import VolunteerCategories from './components/VolunteerCategories';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <VolunteerCategories  />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;