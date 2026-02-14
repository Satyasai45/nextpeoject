"use client";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-slate-800 py-16 px-6 text-white">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-2">Contact</h2>
        <p className="text-slate-300 mb-8">Get in touch with us.</p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
