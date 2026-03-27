import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}
