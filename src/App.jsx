import './App.css';
import MapBackground from './components/MapBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <MapBackground />
      <div className="app-wrapper">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
