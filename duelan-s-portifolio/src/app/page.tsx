import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="relative h-fit bg-primary px-0 px-6 -z-10 sm:h-[calc(100vh)] md:px-24">
        <div className="relative mt-0 sm:-mt-0 sm:top-1/2 sm:-translate-y-1/2 sm:translate-y-none">
          <div className="h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center text-center sm:w-2/3 sm:h-auto sm:text-left sm:block">
            <h1 className="text-secundary uppercase text-6xl font-bold">Duelan's Portifolio</h1>
            <h3 className="text-gray text-lg font-light">Scripter/Programmer, Builder, Game Developer</h3>

            <p className="text-secundary w-10/12 text-base my-4">
              Hello! My name is Alysson, I’m 20 years old, and I’m a game developer also known as Duelan. I’m passionate about creating games on the Roblox platform. Here, you can learn more about me, explore my journey as a game developer, discover my main projects, and get in touch with me. Feel free to explore; it’s an honor to have you here!
            </p>

            <Link href="/" className='font-bold underline text-blue-link'>Read More -{'>'}</Link>
          </div>

          <div className='h-[calc(40vh)] flex flex-col items-center justify-left space-y-6 space-x-0 mt-0 sm:h-[calc(20vh)] sm:mt-12 sm:flex-row sm:space-x-10 sm:space-y-0'>
            <div className='w-fit flex flex-col items-center'>
              <h1 className='text-primary-blue text-8xl font-black'>6</h1>
              <h3 className='w-24 text-center text-base font-semibold'>Years Of Experience</h3>
            </div>

            <div className='w-fit flex flex-col items-center'>
              <h1 className='text-primary-blue text-8xl font-black'>+650M</h1>
              <h3 className='w-24 text-center text-base font-semibold'>Game Visits</h3>
            </div>
          </div>
        </div>

        {/* Duelan imagem */}
        <div className='hidden block w-full h-full bottom-0 -z-10 bg-duelan-main bg-contain bg-no-repeat bg-right-bottom right-0 sm:absolute right-0 md:block lg:h-[90%]'/>
      </div>

      <div className="relative h-fit bg-primary-gray px-0 px-6 -z-10 md:px-24">
        <div className='py-24 text-center sm:text-left sm:py-36 '>
          <h1 className="text-secundary uppercase text-6xl font-bold">My Skills</h1>
          <p className="text-secundary w-full text-base my-4 sm:w-3/5">
            Com meus anos de experiência no Roblox Studio, aprendi muita coisa, o que me tornou um desenvolvedor de jogos versátil. Embora a área de que eu mais goste e na qual tenho mais proficiência seja programação, também sei fazer um pouco de tudo dentro do Roblox Studio. Veja abaixo minhas principais skills:
          </p>
          <div className='flex grow flex-col items-center justify-between mt-12 space-y-12 sm:flex-row sm:space-y-0'>
            <div className='w-full flex flex-col items-center sm:w-1/5'>
              <div className='w-24 h-24 bg-red'></div>
              <h3 className='w-full h-12  text-center text-base font-semibold'>Programador<br/>EXPERIENTE</h3>
            </div>
            <div className='w-full flex flex-col items-center sm:w-1/5'>
              <div className='w-24 h-24 bg-red'></div>
              <h3 className='w-full h-12  text-center text-base font-semibold'>Builder<br/>Intermediário</h3>
            </div>
            <div className='w-full flex flex-col items-center sm:w-1/5'>
              <div className='w-24 h-24 bg-red'></div>
              <h3 className='w-full h-12  text-center text-base font-semibold'>Environment Creation<br/>Intermediário</h3>
            </div>
            <div className='w-full flex flex-col items-center sm:w-1/5'>
              <div className='w-24 h-24 bg-red'></div>
              <h3 className='w-full h-12 text-center text-base font-semibold'>GUI/UI<br/>Básico</h3>
            </div>
            <div className='w-full flex flex-col items-center sm:w-1/5'>
              <div className='w-24 h-24 bg-red'></div>
              <h3 className='w-full h-12  text-center text-base font-semibold'>Texturizador<br/>Básico</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
