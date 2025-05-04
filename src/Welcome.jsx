import backgroundImage from "./assets/bg.png";
import { Typewriter } from "react-simple-typewriter";

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
        <Typewriter
          words={["Securely store and easily manage all your personal contacts"]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
    </div>
  );
}
