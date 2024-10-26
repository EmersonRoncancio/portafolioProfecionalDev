import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const Seccion3 = () => {
  return (
    <div className="bg-red-500 md:row-span-2 rounded-lg grid grid-cols-2 justify-center items-center py-10 gap-x-14 max-md:h-[300px]">
      <FaHtml5 size={45} className='invert self-center justify-self-end' />
      <FaCss3Alt size={45} className='invert' />
      <RiJavascriptFill size={45} className='invert self-center justify-self-end' />
      <IoLogoReact size={45} className='invert' />
      <SiTailwindcss size={45} className='invert self-center justify-self-end' />
      <FaBootstrap size={45} className='invert' />
      <BiLogoTypescript size={45} className='invert self-center justify-self-end' />
      <SiNextdotjs size={45} className='invert' />
      <GrMysql size={45} className='invert self-center justify-self-end' />
      <SiVite size={45} className='invert' />
    </div>
  )
}
