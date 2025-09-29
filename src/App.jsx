import "./App.css";
import "devicon/devicon.min.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-purple-600 text-sm md:text-lg mb-4 p-3 rounded-2xl">
        <p className="animate-pulse">
          IshyCodes is currently undergoing a transformation. Watch us build!
          Experience our website evolve in real-time.
        </p>
      </div>
      <Navbar />
      {/* <Hero /> */}
      <About />
      {/* <Skills /> */}
      {/* <Contact /> */}

      <Footer />
    </div>
  );
}

export default App;
