// Experience.jsx
export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-white p-6">
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
        <div className="space-y-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Graphics Designer / 3D Modeler</h3>
            <p className="text-sm text-gray-600">Creative Studio Ltd. &mdash; Jan 2022 – Present</p>
            <ul className="list-disc list-inside text-sm mt-2 text-gray-700">
              <li>Designed brand visuals and marketing materials for various clients</li>
              <li>Created 3D product mockups and models for advertising</li>
              <li>Collaborated with teams on UI/UX for digital platforms</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Junior Designer</h3>
            <p className="text-sm text-gray-600">Vision Media House &mdash; Aug 2020 – Dec 2021</p>
            <ul className="list-disc list-inside text-sm mt-2 text-gray-700">
              <li>Supported senior designers in daily creative tasks</li>
              <li>Contributed to ad campaigns and logo design</li>
              <li>Managed image assets and project files</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-600 mt-12">
        Contact me at <a href="mailto:kashif9911@hotmail.com" className="underline text-blue-600">kashif9911@hotmail.com</a>
      </footer>
    </div>
  );
}
