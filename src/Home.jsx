import Welcome from "./Welcome";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";

export default function Home({ contacts, addContact, deleteContact ,updateContact}) {
  return (
    <>
      <Welcome />
      <div className="p-4 max-w-4xl mx-auto">
        <ContactForm addContact={addContact} />
        <div className="mt-4 flex flex-col gap-4">
          {contacts.map((contact, index) => (
            <ContactCard
              key={index}
              contact={contact}
              deleteContact={deleteContact}
              updateContact={updateContact}
            />
          ))}
        </div>
      </div>
    </>
  );
}
