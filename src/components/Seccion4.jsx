import { GiThink } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { MdLeaderboard } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";


export const Seccion4 = () => {
  return (
    <div className="bg-pink-500 md:row-span-2 rounded-lg relative flex flex-col justify-center items-center gap-5 max-md:h-[300px]">
      <h2 className='text-white text-3xl mb-4'>Habilidades</h2>
      <div className="flex justify-center items-center gap-2">
        <GiThink className="text-white" />
        <h3 className="text-white">Pensamiento Critico</h3>
      </div>
      <div className="flex justify-center items-center gap-2">
        <BsStars className="text-white" />
        <h3 className="text-white">Creatividad</h3>
      </div>
      <div className="flex justify-center items-center gap-2">
        <HiUserGroup className="text-white" />
        <h3 className="text-white">Adaptabilidad</h3>
      </div>
      <div className="flex justify-center items-center gap-2">
        <MdLeaderboard className="text-white" />
        <h3 className="text-white">Liderazgo</h3>
      </div>
      <div className="flex justify-center items-center gap-2">
        <MdGroupAdd className="text-white" />
        <h3 className="text-white">Trabajo en equipo</h3>
      </div>
    </div>
  )
}
