import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Writing from './pages/Writing';
import Research from './pages/Research';
import Projects from './pages/Projects';
import './index.css';

function App() {
  return (
    <Router>
      <div className="game-container">
        <main className="viewport">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
