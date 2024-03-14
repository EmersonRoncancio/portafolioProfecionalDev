import { Link } from 'react-router-dom';
import projects from '../assets/videoPro.mp4'
import { FaArrowRightToBracket } from "react-icons/fa6";

export const Seccion5 = () => {
  return (
    <div className="md:col-span-2 rounded-lg relative overflow-hidden flex max-md:h-[300px]">
        <div className='w-[80%] h-full flex justify-end z-10 px-5 p-3 font-mono flex-col gap-6'>
          <h2 className='text-white text-base'>Proyectos Personales</h2>
        </div>
        <div className='z-10 h-full w-[20%] flex justify-center items-start py-4'>
          <Link to="/proyectos" className='z-10'><FaArrowRightToBracket size={25} className='text-white'/></Link>
        </div>
      <video muted loop autoPlay playsInline className='z-0 object-cover w-full h-full absolute' src={projects}></video>
    </div>
  )
}
