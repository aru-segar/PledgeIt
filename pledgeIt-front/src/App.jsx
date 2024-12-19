import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import VolunteerCategories from './components/VolunteerCategories';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/VolunteerCategories" element={<VolunteerCategories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;