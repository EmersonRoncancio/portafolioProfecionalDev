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
        <p className='text-white text-wrap text-xs sm:text-base'>
          ¡Hola! Soy Emerson Roncancio, desarrollador full stack con experiencia en
          <span className='text-blue-900 font-extrabold'> React</span>, <span className='text-blue-700 font-extrabold'>Tailwind CSS</span>,
          <span className='text-green-800 font-extrabold'> Node.js</span>, <span className='text-white font-extrabold'>Express</span>,
          <span className='text-blue-800 font-extrabold'> TypeScript</span> y <span className='text-red-600 font-extrabold'>Nest.js</span>.
          Me especializo en construir interfaces web atractivas y dinámicas, y en desarrollar aplicaciones sólidas tanto en el frontend como en
          el backend. ¡Estoy listo para llevar tus proyectos al siguiente nivel!
        </p>
      </div>
    </div>
  )
}
