import { useState } from "react";

export default function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();

    if (trimmedName && trimmedPhone && trimmedEmail) {
      const randomImage = `https://i.pravatar.cc/150?u=${encodeURIComponent(
        trimmedName + "-" + trimmedPhone
      )}`;

      // ID DIHAPUS dari sini
      const newContact = {
        name: trimmedName,
        phone: trimmedPhone,
        email: trimmedEmail,
        image: randomImage,
      };

      addContact(newContact); // serahkan ke App.jsx untuk kirim ke backend
      setName("");
      setPhone("");
      setEmail("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col gap-6 md:flex-row md:gap-8 md:items-center"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-3 rounded bg-gray-700 border border-gray-600 text-white w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:border-blue-500"
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="p-3 rounded bg-gray-700 border border-gray-600 text-white w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:border-blue-500"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded bg-gray-700 border border-gray-600 text-white w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded transition-all duration-300 ease-in-out transform hover:scale-105 mt-4 md:mt-0"
      >
        Add Contact
      </button>
    </form>
  );
}
