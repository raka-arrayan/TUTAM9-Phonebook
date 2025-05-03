import { useState } from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

export default function ContactList() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "123456789",
      email: "john@example.com",
      image: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      name: "Jane Doe",
      phone: "987654321",
      email: "jane@example.com",
      image: "https://i.pravatar.cc/150?u=2",
    },
  ]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <ContactForm addContact={addContact} />
      <div className="contact-list">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} deleteContact={deleteContact} />
        ))}
      </div>
    </div>
  );
}
