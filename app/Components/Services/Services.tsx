"use client";

export default function Services() {
  const services = [
    { title: "Geolocation", desc: "Real-time location tracking and mapping." },
    { title: "Geofencing", desc: "Trigger actions when users enter or leave areas." },
    { title: "Local Discovery", desc: "Find nearby places and points of interest." },
  ];

  return (
    <section id="services" className="w-full bg-slate-100 py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Services</h2>
        <p className="text-slate-600 mb-10">What we offer for location-based solutions.</p>
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-slate-800">{s.title}</h3> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
