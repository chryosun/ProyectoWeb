// App.jsx
import './App.css';
import { Blog } from './Pages/Blog';
import Entrada from './Pages/[blogEntrada]';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:entrada" element={<Entrada />} />
      </Routes>
    </Router>
  );
}

export default App;
