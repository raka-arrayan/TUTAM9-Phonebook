import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";

// Gunakan URL dari environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api`)
      .then((res) => {
        setContacts(res.data.data);
      })
      .catch((err) => {
        console.error("Gagal mengambil kontak:", err);
      });
  }, []);

  const addContact = async (newContact) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/api`, newContact);
      setContacts((prev) => [...prev, res.data.data]);
    } catch (err) {
      console.error("Gagal menambahkan kontak:", err);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/${id}`);
      setContacts((prev) => prev.filter((contact) => contact.id !== id));
    } catch (err) {
      console.error("Gagal menghapus kontak:", err);
    }
  };

  const updateContact = async (updatedContact) => {
    try {
      const res = await axios.put(
        `${API_BASE_URL}/api/${updatedContact.id}`,
        updatedContact
      );
      setContacts((prev) =>
        prev.map((contact) =>
          contact.id === updatedContact.id ? res.data.data : contact
        )
      );
    } catch (err) {
      console.error("Gagal memperbarui kontak:", err);
    }
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
