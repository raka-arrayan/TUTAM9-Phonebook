import { useState } from "react";

export default function ContactCard({ contact, deleteContact, updateContact }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState({ ...contact });

  const handleChange = (e) => {
    setEditedContact({
      ...editedContact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    updateContact(editedContact);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-800 text-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start gap-4 w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <img
        src={contact.image}
        alt={contact.name}
        className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
      />
      {isEditing ? (
        <div className="flex flex-col gap-2 w-full">
          <input
            name="name"
            value={editedContact.name}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700"
          />
          <input
            name="phone"
            value={editedContact.phone}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700"
          />
          <input
            name="email"
            value={editedContact.email}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700"
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-full"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="text-center md:text-left flex-1">
            <h3 className="text-xl font-semibold">{contact.name}</h3>
            <p className="text-gray-300">{contact.phone}</p>
            <p className="text-gray-400">{contact.email}</p>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full"
            >
              Edit
            </button>
            <button
              onClick={() => deleteContact(contact.id)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
