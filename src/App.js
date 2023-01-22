import './App.css';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";


function App() {
  return (<>
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Profile/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
    <Portfolio/>
    <About/>
    </>
  );
}

export default App;
