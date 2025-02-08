import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="relative h-fit bg-primary px-6 sm:h-[calc(100vh)] min-h-[720px] sm:px-6 md:px-20 xl:px-40 -mt-20">
        <div className="relative mt-0 z-10 sm:-mt-0 sm:top-1/2 sm:-translate-y-1/2 sm:translate-y-none">
          <div className="h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center text-center sm:w-2/3 sm:h-auto sm:text-left sm:block">
            <h1 className="text-secondary uppercase text-6xl font-bold">Duelan's Portfolio</h1>
            <h3 className="text-gray text-lg font-light">Scripter/Programmer, Builder, Game Developer</h3>

            <p className="text-secondary w-full text-base my-4 sm:w-10/12">
              Hello! My name is Alysson, I’m 20 years old, and I’m a game developer also known as Duelan. I’m passionate about creating games on the Roblox platform. Here, you can learn more about me, explore my journey as a game developer, discover my main projects, and get in touch with me. Feel free to explore; it’s an honor to have you here!
            </p>

            <Link href="/about" className='font-bold underline text-blue-link'>Read More -{'>'}</Link>
          </div>

          <div className='h-[calc(40vh)] flex flex-col items-center justify-left space-y-6 space-x-0 mt-0 sm:h-[calc(20vh)] sm:mt-12 sm:flex-row sm:space-x-12 sm:space-y-0'>
            <div className='w-fit flex flex-col items-center'>
              <h1 className='text-primary-blue text-8xl font-black'>6</h1>
              <div className='absolute w-32 h-32 -mt-4 bg-years-decoration bg-cover'></div>
              <h3 className='w-24 text-center text-base font-semibold'>Years Of Experience</h3>
            </div>

            <div className='w-fit flex flex-col items-center'>
              <h1 className='text-primary-blue text-8xl font-black'>+660M</h1>
              <h3 className='w-24 text-center text-base font-semibold'>Game Visits</h3>
            </div>
          </div>
        </div>

        {/* Duelan imagem */}
        <div className=' block w-full h-full bottom-0 -z-1 bg-duelan-main bg-contain bg-no-repeat bg-right-bottom sm:absolute right-0 md:block lg:h-[90%]'/>
      </div>

      <div className="relative h-fit bg-primary-gray px-6 -z-10 sm:px-12 md:px-20 xl:px-40">
        <div className='py-24 text-center sm:text-left sm:py-36 '>
          <h1 className="text-secondary uppercase text-6xl font-bold">My Skills</h1>
          <p className="text-secondary w-full text-base my-4 sm:w-3/5">
            With my years of experience in Roblox Studio, I have learned a lot, making me a versatile game developer. Although programming is the area I enjoy the most and have the most expertise in, I also know how to do a bit of everything in Roblox Studio. Below are my main skills:
          </p>

          <div className='flex grow flex-col items-center justify-between mt-6 space-y-12 sm:flex-row sm:space-y-0'>
            <div className='w-full flex flex-col items-center sm:w-1/6'>
              <div className='w-24 h-24 bg-script-icon bg-cover'></div>
              <h3 className='w-full h-12 text-center text-base font-semibold'>EXPERIENCED<br/>Programmer</h3>
            </div>
            <div className='w-full flex flex-col items-center sm:w-1/6'>
              <div className='w-24 h-24 bg-hammer-icon bg-cover'></div>
              <h3 className='w-full h-12 text-center text-base font-semibold'>Intermediate<br/>Builder</h3>
            </div>
            <div className='w-full flex flex-col items-center sm:w-1/6'>
              <div className='w-24 h-24 bg-environment-icon bg-cover'></div>
              <h3 className='w-full h-12 text-center text-base font-semibold'>Intermediate<br/>Environment Creation</h3>
            </div>
            <div className='w-full flex flex-col items-center sm:w-1/6'>
              <div className='w-24 h-24 bg-gui-icon bg-cover'></div>
              <h3 className='w-full h-12 text-center text-base font-semibold'>Basic<br/>GUI/UI</h3>
            </div>
            <div className='w-full flex flex-col items-center sm:w-1/6'>
              <div className='w-16 h-16 bg-texturizer-icon bg-cover md:w-24 md:h-24'></div>
              <h3 className='w-full h-12 text-center text-base font-semibold'>Basic<br/>Texturizer</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
