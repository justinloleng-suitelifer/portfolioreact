import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Justin Gerald Loleng</h2>
        <nav className="space-x-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16">
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Justin Gerald Loleng
        </div>
      </footer>
    </div>
  )
}
