import fotoPerfil from '../assets/fotoPerfil.jpeg'

export const Seccion1 = () => {
  return (
    <div className="bg-cyan-500 md:col-span-2 md:row-span-2 rounded-lg overflow-hidden flex relative max-md:h-[500px]">
      <span className='absolute top-0 right-0 text-white m-3 text-xs md:text-base'>Emerson Davian Roncancio Avila</span>
      <div className="w-[40%] h-full rounded-r-[50%] overflow-hidden">
        <img className='w-full h-full object-cover' src={fotoPerfil} alt="Foto de Perfil" />
      </div>
      <div className='w-[60%] h-full flex flex-col justify-end items-start px-4 gap-8 pb-12 pl-4'>
        <h1 className='text-white lg:text-2xl'>Hola Soy Emerson👋</h1>
          <p className='text-white text-wrap text-sm sm:text-base'>
            ¡Hola! Soy Emerson Roncancio, desarrollador front-end con experiencia en <span className='text-orange-500 font-extrabold'>HTML</span>,
            <span className='text-blue-700 font-extrabold'>CSS</span>, <span className='text-yellow-500 font-extrabold'>JavaScript</span>,
            <span className='text-blue-900 font-extrabold'>React</span> y <span className='text-blue-700 font-extrabold'>Tailwind CSS</span>.
             Me especializo en crear interfaces web atractivas y dinámicas. ¡Listo para llevar tus proyectos al siguiente nivel!</p>
      </div>
    </div>
  )
}
