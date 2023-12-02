import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Galeria } from './Pages/Galeria';
import { Blog } from './Pages/Blog';
import { Eventos } from './Pages/Eventos';
import { FAQ } from './Pages/faq';
import { Entrada1 } from './components/Blog/clean-code';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/eventos" element={<Eventos/>}></Route>
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/blog/clean-code" element={<Entrada1 />} />
      </Routes>
    </Router>
  );
}

export default App;
