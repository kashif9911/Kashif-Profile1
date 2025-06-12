// Home.jsx
import { useState } from "react";

const images = Array.from({ length: 50 }, (_, i) => `/images/design${i + 1}.jpg`);

export default function Home() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2f5f9] via-[#e3eaf1] to-[#f2f5f9]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-[url('/images/bg-pattern.jpg')] bg-cover bg-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow">Muhammad Kashif Imran</h1>
        <p className="text-xl text-white mt-4 animate-fade-in">Crafting Visual Stories Through Design</p>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
        <p className="text-lg text-gray-700 text-center">
          I’m a passionate graphic designer with a keen eye for detail and a love for turning ideas into compelling visuals.
          With a solid track record of creative work and a growing design portfolio, I specialize in transforming concepts
          into clean, impactful designs. Let’s bring ideas to life through powerful imagery.
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Portfolio Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedImg(src)}
            >
              <img src={src} alt={`Design ${idx + 1}`} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                View
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img src={selectedImg} className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl" />
        </div>
      )}
    </div>
  );
}
