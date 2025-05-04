export default function ContactList({ contacts, addContact, deleteContact, updateContact }) {
  return (
    <div>
      <ContactForm addContact={addContact} />
      <div className="contact-list">
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
  );
}
