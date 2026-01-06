import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GetKey from './pages/GetKey';
import Games from './pages/Games';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#08080a] text-zinc-100 selection:bg-zinc-500/30">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/getkey" element={<GetKey />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
