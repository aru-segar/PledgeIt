import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Features from './components/Features';
import VolunteerCategories from './components/VolunteerCategories';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/volunteer-categories" element={<VolunteerCategories />} />
      </Routes>
      <Features />
      <Footer />
    </div>
  );
}

export default App;