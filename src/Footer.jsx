import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">RakaPhoneBook</h2>
          <p className="text-sm italic">"Record Closer, Connect Faster."</p>
          <p className="text-xs mt-2">&copy; 2025 RakaPhoneBook. All rights reserved.</p>
        </div>

        <div className="flex space-x-6 text-xl">
          <a href="https://github.com/raka-arrayan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-gray-400 transition-colors duration-300" />
          </a>
          <a href="rakaarayan27@gmail.com" aria-label="Email">
            <FaEnvelope className="hover:text-yellow-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}
