import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-black/5 bg-white py-8">
        <div className="container mx-auto px-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Your Name — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-gray-900" href="#">Twitter</a>
            <a className="hover:text-gray-900" href="#">Dribbble</a>
            <a className="hover:text-gray-900" href="#">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
