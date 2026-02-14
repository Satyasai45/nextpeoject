"use client";

export default function About() {
  return (
    <section id="about" className="w-full bg-white py-16 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">About Us</h2>
          <p className="text-slate-600 leading-relaxed">
            We build location-based services that help businesses engage users with the right content at the right place. From geofencing to local discovery, we make it simple to leverage location data.
          </p>
        </div>
        <div className="flex-1 rounded-xl bg-slate-100 h-64 flex items-center justify-center text-slate-500">
          Placeholder for image or stats
        </div>
      </div>
    </section>
  );
}
