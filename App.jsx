import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Experience from "./Experience";

export default function App() {
  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Kashif Imran</h1>
          <div className="space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/experience" className="hover:text-blue-600">Experience</Link>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}
