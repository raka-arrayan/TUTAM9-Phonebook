import backgroundImage from "./assets/bg.png";

export default function Welcome() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${backgroundImage})`,
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
        RakaPhoneBook Manager
      </h1>
      <p className="text-lg md:text-2xl drop-shadow-md">
        Keep your contacts safe
      </p>
    </div>
  );
}
