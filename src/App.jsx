import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Writing from './pages/Writing';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Now from './pages/Now';
import About from './pages/About';
import './index.css';

function App() {
  return (
    <Router>
      <div className="game-container">
        <main className="viewport">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/now" element={<Now />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
