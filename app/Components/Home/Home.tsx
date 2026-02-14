"use client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-illustration/background-based-on-concept-local-260nw-2410628825.jpg')",
        }}
        className="flex min-h-[87vh] w-full flex-col items-center justify-center gap-4 bg-cover bg-center bg-no-repeat"
      >
        <h1 className="text-4xl font-bold text-white">
          location-based-services
        </h1>
        <p className="text-2xl font-bold text-white">This is a paragraph</p>
      </section>
    </div>
  );
}
