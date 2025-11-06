function About() {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="container mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hi, I’m <span className="text-fuchsia-600">Your Name</span>
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Frontend engineer and designer blending AI-driven workflows with playful, cartoon-inspired visual language. I love building fast, accessible, and expressive interfaces with React, 3D scenes, and tasteful micro-interactions.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-purple-500" /> 5+ years crafting web experiences</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500" /> Comfortable with 3D, motion, and design systems</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" /> Passionate about delightful details</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-fuchsia-200 via-purple-200 to-indigo-200 p-1">
            <div className="h-full w-full rounded-2xl bg-white flex items-center justify-center text-7xl">🤖🎨</div>
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-xl bg-white px-4 py-2 shadow">Open for freelance</div>
        </div>
      </div>
    </section>
  );
}

export default About;
