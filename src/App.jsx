import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";

export default function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    if (
      newContact &&
      typeof newContact === "object" &&
      newContact.name &&
      newContact.phone &&
      newContact.email &&
      newContact.image
    ) {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    } else {
      console.error("Invalid contact data", newContact);
      alert("Gagal menambahkan kontak. Data tidak lengkap.");
    }
  };

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home contacts={contacts} addContact={addContact} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/contacts"
              element={
                <div className="p-6">
                  <h1 className="text-3xl font-bold mb-6 text-center">RakaPhoneBook</h1>
                  <ContactForm addContact={addContact} />
                  <div className="mt-8 flex flex-col gap-4">
                    {contacts.map((contact, index) => (
                      <ContactCard key={index} contact={contact} />
                    ))}
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
