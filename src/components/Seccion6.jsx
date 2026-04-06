import { MdEmail } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";

export const Seccion6 = ({ darkMode }) => {
  return (
    <div
      className={`flex justify-center items-center relative max-md:h-[300px] ${darkMode ? "bg-gray-700" : "bg-indigo-500"} rounded-2xl md:rounded-[2rem]`}
    >
      <a href="mailto:roncancioavila@gmail.com">
        <FaArrowRightToBracket
          className={`absolute right-0 top-0 m-5 ${darkMode ? "text-gray-200" : "text-white"}`}
          size={25}
        />
      </a>
      <MdEmail
        className={darkMode ? "text-gray-200" : "text-white"}
        size={75}
      />
    </div>
  );
};
