import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Gallery from "./Pages/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";
import Navbar from './Components/Navigationbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Contact />
      
    </div>
  );
}

export default App;
