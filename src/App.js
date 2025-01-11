import './App.css';
import Footer from './common/Footer';
import Hero from './components/Hero';
import Karmic from './components/Karmic';
import Services from './components/Services';
import UpcomingProjects from './components/UpcomingProjects';
import Values from './components/Values';
import Projects from './components/projects';

function App() {
  return (
    <>
      <Hero />
      <UpcomingProjects />
      <Services />
      <Projects />
      <Karmic />
      <Values />
      <Footer/>
    </>
  );
}

export default App;
