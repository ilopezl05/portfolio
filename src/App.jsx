import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-purple-600 text-lg md:text-xl mb-4 p-3 rounded-2xl">
        <p className="animate-pulse">
          IshyCodes is currently undergoing a transformation. Watch us build!
          Experience our website evolve in real-time.
        </p>
      </div>
      <Navbar />
      {/* <Hero /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
