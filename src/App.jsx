import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
