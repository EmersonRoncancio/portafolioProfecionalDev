import { MdEmail } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";

export const Seccion6 = () => {
  return (
    <div className="bg-indigo-500 rounded-lg flex justify-center items-center relative max-md:h-[300px]">
      <a href="mailto:roncancioavila@gmail.com">
        <FaArrowRightToBracket className="text-white absolute right-0 top-0 m-5" size={25} />
      </a>
      <MdEmail className="text-white" size={75} />
    </div>
  )
}
