import { FaLinkedin } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

export const Seccion8 = () => {
  return (
    <div className="bg-blue-500 rounded-lg flex justify-center items-center relative max-md:h-[300px]">
      <a href="https://www.linkedin.com/in/emerson-roncancio-540718291/" target="_blank">
        <FaArrowRightToBracket className="text-white absolute right-0 top-0 m-5" size={25} />
      </a>
      <FaLinkedin className='text-white' size={70} />
    </div>
  )
}
