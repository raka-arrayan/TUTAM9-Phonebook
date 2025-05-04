import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";

export default function App() {
  const [contacts, setContacts] = useState([]);

  // Fetch data awal dari backend saat pertama kali render
  useEffect(() => {
    axios
      .get("/api/contacts")
      .then((res) => setContacts(res.data))
      .catch((err) => {
        console.error("Gagal mengambil kontak:", err);
        alert("Gagal mengambil data kontak dari server.");
      });
  }, []);

  const addContact = async (newContact) => {
    try {
      const res = await axios.post("/api/contacts", newContact);
      setContacts((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Gagal menambahkan kontak:", error);
      alert("Gagal menambahkan kontak.");
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      setContacts((prev) => prev.filter((contact) => contact.id !== id));
    } catch (error) {
      console.error("Gagal menghapus kontak:", error);
      alert("Gagal menghapus kontak.");
    }
  };

  const updateContact = (updatedContact) => {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  contacts={contacts}
                  addContact={addContact}
                  deleteContact={deleteContact}
                  updateContact={updateContact}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/contacts"
              element={
                <div className="p-6">
                  <h1 className="text-3xl font-bold mb-6 text-center">
                    RakaPhoneBook
                  </h1>
                  <ContactForm addContact={addContact} />
                  <div className="mt-8 flex flex-col gap-4">
                    {contacts.map((contact) => (
                      <ContactCard
                        key={contact.id}
                        contact={contact}
                        deleteContact={deleteContact}
                        updateContact={updateContact}
                      />
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
