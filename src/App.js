import './App.css';
import Home from './components/Home';
import Resume1 from './components/Resume1';
import Resume2 from './components/Resume2';
import Resume3 from './components/Resume3';
import Resume4 from './components/Resume4';
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/resume1" element={<Resume1 />} />
          <Route exact path="/resume2" element={<Resume2 />} />
          <Route exact path="/resume3" element={<Resume3 />} />
          <Route exact path="/resume4" element={<Resume4 />} />
        </Routes>
    </div>
  );
}

export default App;
