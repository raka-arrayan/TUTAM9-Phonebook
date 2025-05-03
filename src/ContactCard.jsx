export default function ContactCard({ contact, deleteContact }) {
    return (
      <div className="bg-gray-800 text-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start gap-4 w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
        <img
          src={contact.image}
          alt={contact.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">{contact.name}</h3>
          <p className="text-gray-300">{contact.phone}</p>
          <p className="text-gray-400">{contact.email}</p>
        </div>
        <button
          onClick={() => deleteContact(contact.id)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-all duration-300 mt-4 md:mt-0"
        >
          Delete
        </button>
      </div>
    );
  }
  