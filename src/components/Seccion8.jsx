import { FaLinkedin } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

export const Seccion8 = ({ darkMode }) => {
  return (
    <div
      className={`rounded-lg flex justify-center items-center relative max-md:h-[300px] ${darkMode ? "bg-gray-700" : "bg-blue-500"} rounded-2xl md:rounded-[2rem]`}
    >
      <a
        href="https://www.linkedin.com/in/emerson-roncancio-241243325/"
        target="_blank"
      >
        <FaArrowRightToBracket
          className={`absolute right-0 top-0 m-5 ${darkMode ? "text-gray-200" : "text-white"}`}
          size={25}
        />
      </a>
      <FaLinkedin
        className={darkMode ? "text-gray-200" : "text-white"}
        size={70}
      />
    </div>
  );
};
