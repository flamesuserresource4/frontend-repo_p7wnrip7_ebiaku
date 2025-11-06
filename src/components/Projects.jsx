function ProjectCard({ title, tags, description, link, image }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group rounded-2xl border border-black/10 bg-white p-4 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-200 via-purple-200 to-indigo-200">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-5xl">🧩</div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-700">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700">{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

function Projects() {
  const items = [
    {
      title: 'AI Avatar Playground',
      description: 'Interactive avatar builder with real-time 3D controls.',
      tags: ['React', 'Spline', 'Three.js'],
      link: '#',
    },
    {
      title: 'Cartoon UI Kit',
      description: 'A whimsical, accessible component library.',
      tags: ['Design', 'Accessibility', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Motion Lab',
      description: 'Micro-interactions and motion experiments.',
      tags: ['Framer Motion', 'UX', 'Animation'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Projects</h2>
            <p className="mt-2 text-gray-700">A peek into my playful, AI-inspired lab.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 hover:bg-gray-50">Work with me</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
