import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Footer } from './components/Footer'; // Assuming Footer is exported as named export
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/LetsConnect" element={
          <>
          <NavBar/>
            <br/>
          <Contact />
          </>
          } />
          <Route path="/" element={
            <>
              <NavBar />
              <Banner />
              <Skills />
              <Projects />
              <Footer />

            </>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
