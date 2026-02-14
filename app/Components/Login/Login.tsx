"use client";

export default function Login() {
  return (
    <section id="login" className="w-full bg-slate-100 py-16 px-6">
      <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Login</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600 transition-colors"
          >
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
}
