import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Features", path: "/features" },
  ];

  return (
    <nav className="bg-gray-800 bg-opacity-90 backdrop-blur text-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">RakaPhoneBook</h1>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="relative group font-medium transition duration-300"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="block py-2 border-b border-gray-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
