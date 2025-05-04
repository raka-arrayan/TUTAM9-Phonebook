import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Features from "./Features";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";

export default function App() {
  const [contacts, setContacts] = useState([]);

  const API_URL = import.meta.env.VITE_API_BASE_URL; // Ambil base URL dari .env

  // Ambil semua kontak saat pertama kali load
  useEffect(() => {
    axios.get(`${API_URL}/api`) 
      .then(res => {
        if (res.data.success) {
          setContacts(res.data.data);
        } else {
          alert("Gagal memuat data kontak.");
        }
      })
      .catch(err => {
        console.error("Gagal mengambil kontak:", err);
        alert("Terjadi kesalahan saat mengambil kontak.");
      });
  }, []);

  // Tambah kontak baru
  const addContact = (newContact) => {
    axios.post(`${API_URL}/api`, newContact)
      .then(res => {
        if (res.data.success) {
          setContacts(prev => [...prev, res.data.data]);
        } else {
          alert("Gagal menambahkan kontak.");
        }
      })
      .catch(err => {
        console.error("Gagal menambahkan kontak:", err);
        alert("Terjadi kesalahan saat menambahkan kontak.");
      });
  };

  // Hapus kontak
  const deleteContact = (id) => {
    axios.delete(`${API_URL}/api/${id}`)
      .then(res => {
        if (res.data.success) {
          setContacts(prev => prev.filter(contact => contact.id !== id));
        } else {
          alert("Gagal menghapus kontak.");
        }
      })
      .catch(err => {
        console.error("Gagal menghapus kontak:", err);
        alert("Terjadi kesalahan saat menghapus kontak.");
      });
  };

  // Update kontak
  const updateContact = (updatedContact) => {
    axios.put(`${API_URL}/api/${updatedContact.id}`, updatedContact)
      .then(res => {
        if (res.data.success) {
          setContacts(prev =>
            prev.map(contact =>
              contact.id === updatedContact.id ? res.data.data : contact
            )
          );
        } else {
          alert("Gagal memperbarui kontak.");
        }
      })
      .catch(err => {
        console.error("Gagal memperbarui kontak:", err);
        alert("Terjadi kesalahan saat memperbarui kontak.");
      });
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
            <Route path="/features" element={<Features />} />
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
