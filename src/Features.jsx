export default function Features() {
    return (
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-8">
            Why RakaPhoneBook?
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Discover the features that make RakaPhoneBook the best contact manager for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Contact Security</h3>
              <p className="text-gray-400 text-center">
                All your contacts are safely stored with encryption and access protection. You’re in full control.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Fast Search</h3>
              <p className="text-gray-400 text-center">
                Instantly find any contact with an optimized search system. Speed and simplicity combined.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Mobile Friendly</h3>
              <p className="text-gray-400 text-center">
                Fully responsive design so you can access and manage your phonebook anytime, anywhere.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Edit & Delete</h3>
              <p className="text-gray-400 text-center">
                Need to update or remove a contact? Our interface makes it easy with just a few clicks.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Simple UI</h3>
              <p className="text-gray-400 text-center">
                Clean and minimalist user interface for a distraction-free experience.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Open Source</h3>
              <p className="text-gray-400 text-center">
                RakaPhoneBook is open source — improve it or learn from it. Contributions are welcome!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  