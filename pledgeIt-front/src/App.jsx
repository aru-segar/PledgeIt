import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Features from './components/Features';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Features />
      <Footer />
    </div>
  );
}

export default App;