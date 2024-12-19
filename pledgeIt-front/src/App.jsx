import { Routes, Route } from "react-router-dom";
import About from './components/About'
function App() {
  return (
    <div>
      <About />
      {/* <Routes>
        <Route path="/volunteercategories" element={<VolunteerCategories />} />
        <Route path="/" element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;