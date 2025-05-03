export default function About() {
    return (
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-8">
            About RakaPhoneBook
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            RakaPhoneBook is a secure and easy-to-use contact management app, designed to help you stay organized and keep your contacts safe.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Why Choose Us?</h3>
              <p className="text-gray-400 text-center">
                With RakaPhoneBook, managing your contacts has never been easier. Our intuitive design allows you to add, view, and organize contacts effortlessly.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Built With Security In Mind</h3>
              <p className="text-gray-400 text-center">
                We prioritize your privacy. All your contact data is securely stored and accessible only by you.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  