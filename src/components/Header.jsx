import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-black/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-lg text-gray-900">
          <span className="text-fuchsia-600">AI</span>Toon
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="#" className="rounded-md bg-gray-900 text-white px-3 py-2">Download CV</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <span className="i">☰</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-3 text-gray-700">
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a href="#" onClick={() => setOpen(false)} className="rounded-md bg-gray-900 text-white px-3 py-2 w-max">Download CV</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
