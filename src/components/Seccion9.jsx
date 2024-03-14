import videoGit from '../assets/laptop.mp4'
import { FaGithub } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

export const Seccion9 = () => {
  return (
    <div className="md:col-span-2 rounded-lg relative overflow-hidden flex flex-col max-md:h-[300px]">
      <div className='z-10 w-full h-[50%] flex justify-between items-start p-3'>
        <FaGithub className='text-white' size={40}/>
        <a href="https://github.com/EmersonRoncancio" target='_blank'>
          <FaArrowRightToBracket className='text-white' size={30}/>
        </a>
      </div>
      <div className='z-10 w-full h-[50%] bg-gradient-to-t to-transparent from-gray-700 flex flex-col items-start justify-end p-3'>
        <h2 className='text-white text-2xl'>GitHub</h2>
        <p className='text-white'>Perfil de GitHub, donde subo mis proyectos personales</p>
      </div>
      <video muted loop autoPlay playsInline className='z-0 object-cover w-full h-full absolute' src={videoGit}></video>
    </div>
  )
}
