import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GetKey from './pages/GetKey';
import Games from './pages/Games'; // Import halaman baru

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#08080a] text-zinc-100">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getkey" element={<GetKey />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
