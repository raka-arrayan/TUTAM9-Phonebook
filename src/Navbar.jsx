import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed top-0 w-full z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">RakaPhoneBook</h1>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-800 px-4 pb-4">
          <Link
            to="/"
            className="block py-2 hover:underline"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:underline"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
