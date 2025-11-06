function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let’s build something fun</h2>
          <p className="mt-2 text-gray-700">Reach out for collaborations, freelance, or just to say hi 👋</p>
        </div>
        <form
          className="mt-10 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const payload = Object.fromEntries(form.entries());
            alert(`Thanks, ${payload.name || 'friend'}! I’ll get back to you soon.`);
            e.currentTarget.reset();
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1">
              <label className="text-sm text-gray-700">Name</label>
              <input name="name" required className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm text-gray-700">Email</label>
              <input type="email" name="email" required className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </div>
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-gray-700">Message</label>
            <textarea name="message" rows={5} required className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Prefer email? yourname@email.com</p>
            <button type="submit" className="rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 text-white shadow-lg shadow-fuchsia-600/30 hover:brightness-110">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
