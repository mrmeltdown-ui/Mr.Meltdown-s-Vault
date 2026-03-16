import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GamePlayer from './pages/GamePlayer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/:id" element={<GamePlayer />} />
      </Routes>
    </Router>
  );
}
