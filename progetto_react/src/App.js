import Header from './common/Header/Header';
import './App.css';
import Footer from './common/Footer/Footer';
import Body from './common/Body/Body'
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Routes>
          <Route exact path='' element={<Body />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/about' element={<About />} />
      </Routes>
      </Router>
      <Footer />
      
      
    </div>
  );
}

export default App;