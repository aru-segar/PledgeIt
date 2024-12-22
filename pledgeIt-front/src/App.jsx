import { Routes, Route} from "react-router-dom";
import HomePage from './components/homepage/HomePage';
import Header from './components/template/Header';
import Footer from './components/template/Footer';
import VolunteerCategories from './components/events/VolunteerCategories';

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