export default function About() {
  return (
    <main>
      <div className="h-fit bg-primary px-6 sm:px-12 md:px-20 xl:px-40">
        <div className="flex-row z-10 mt-0 sm:-mt-0 space-y-24 py-24 sm:space-y-32">
          <div className="w-full flex flex-col items-start text-center sm:h-auto sm:text-left">
            <div className='w-full h-full text-secondary text-base'>
              <h1 className="uppercase text-6xl font-bold mb-4">About Me</h1>
              <p className="w-full" >
                Hi! I'm Alysson, also known as Duelan. I'm a 20-year-old game developer from Brazil <span className='italic font-bold'>(GMT -3)</span>. I'm fluent in Portuguese and have an intermediate level of English. I'm passionate about creating games on Roblox, and I enjoy exploring various aspects of game development while constantly learning new things. When I'm not working on games, I love spending time with my friends and exploring new games, which not only helps me relax but also inspires my projects.
              </p>
              <br/>
              <p>
                Throughout my journey with Roblox Studio, I've acquired a wide range of skills and created several games, many of which have been valuable learning experiences, even if they were never released. In 2019, I launched <a href="https://www.roblox.com/games/4237861040/Treacherous-Tower" target="_blank" rel="noopener noreferrer" className="text-link">Treacherous Tower</a>, a game where players climb a tower filled with obstacles that change every 60 seconds, using power-ups to either help or hinder others. The game reached over 650 million visits, marking a major milestone in my development career and motivating me to keep improving as a developer.
              </p>
              <br/>
              <p>
                  Other important projects I've worked on include <a href="https://www.roblox.com/games/14108196267/The-Adventures-of-John-and-Mark" target="_blank" rel="noopener noreferrer" className="text-link">The Adventures of John and Mark</a> and <a href="https://www.roblox.com/games/16497788573/Pink-Palace-Tycoon" target="_blank" rel="noopener noreferrer" className="text-link">Pink Palace Tycoon</a>.
              </p>
              <br/>
              <p>
                Currently, in 2025, I'm in my second semester of a Computer Science degree. While my studies take up part of my day, my passion for programming and Roblox game development remains strong.
              </p>
              <br/>
              <h3 className="font-bold text-lg">Key experiences:</h3>
              <ul className="pl-8 text-left sm:text-left font-medium">
                <li className="list-disc">6+ years of experience with Luau</li>
                <li className="list-disc">Familiar with open-source modules such as Trove, Signal, ProfileService, Promise, ByteNet, and more</li>
                <li className="list-disc">Game Design</li>
                <li className="list-disc">Intermediate experience in 3D, including environment creation, Blender, and Substance Painter</li>
                <li className="list-disc">UI/UX interface manipulation</li>
                <li className="list-disc">Problem-solving and debugging</li>
                <li className="list-disc">Focus on code optimization and organization</li>
              </ul>
              <br/>
              <p>
                I'm eager to expand my horizons in the game development industry. Feel free to reach out—who knows, we might create something amazing together!
              </p>

              {/* <div className='absolute right-1/2 hidden mx-8 w-60 h-60 -mt-4 rotate-6 bg-right-arrow bg-cover lg:block'></div> */}
            </div>
          </div>
{/* 
          <div className="w-full flex flex-col items-end text-center sm:h-auto sm:text-left">
            <div className='w-full h-full lg:w-1/2'>
              <h1 className="text-secondary uppercase text-6xl font-bold">My Journey</h1>
              <p className="prose text-secondary w-full text-base my-4">
                My journey in Roblox game development began in 2018, but my passion started long before. At 10 years old, when I received my first computer, I became fascinated with online games and wanted to understand how they are made. In 2017, when I tried Roblox for the first time, I noticed the potential of the platform, and in 2018, I immersed myself in development. Since then, I’ve improved my skills by creating various projects, some of which were not released but were essential to my learning. In 2019, I developed <a href="https://www.roblox.com/games/4237861040/Treacherous-Tower" target="_blank" rel="noopener noreferrer" className="text-link">Treacherous Tower</a>, where players climb a tower with obstacles that change every 60 seconds. The game surpassed 650 million visits, and it was a milestone in my journey.
                <br/><br/>
                Other major projects include <a href="https://www.roblox.com/games/14108196267/The-Adventures-of-John-and-Mark" target="_blank" rel="noopener noreferrer" className="text-link">The Adventures of John and Mark</a>, <a href="https://www.roblox.com/games/16497788573/Pink-Palace-Tycoon" target="_blank" rel="noopener noreferrer" className="text-link">Pink Palace Tycoon</a>, and <a href="https://www.roblox.com/games/118073417231051/Elemental-Castle-Tycoon" target="_blank" rel="noopener noreferrer" className="text-link">Elemental Castle Tycoon</a>.
                <br/>
                In <a href="https://www.roblox.com/games/14108196267/The-Adventures-of-John-and-Mark" target="_blank" rel="noopener noreferrer" className="text-link">The Adventures of John and Mark</a>, I worked alongside my friend <a href="https://x.com/NekoAltz" target="_blank" rel="noopener noreferrer" className="text-link">Neko_Altz</a>. He was responsible for building, modeling, and animation, while I handled programming, VFX, UI, lighting, and creative direction.
                <br/>
                In <a href="https://www.roblox.com/games/16497788573/Pink-Palace-Tycoon" target="_blank" rel="noopener noreferrer" className="text-link">Pink Palace Tycoon</a>, I worked with a bigger team, gaining experience in collaboration. I was the main scripter, creating systems such as avatar customization, inventory, missions, shop, tycoon save, and vehicles.
                <br/>
                <a href="https://www.roblox.com/games/118073417231051/Elemental-Castle-Tycoon" target="_blank" rel="noopener noreferrer" className="text-link">Elemental Castle Tycoon</a> was a solo project released at the beginning of 2025. A tycoon focused on elemental powers and building castles, where I developed all the programming, building, modeling, and visual effects. Creating it during my vacation allowed me to improve various skills and review important concepts.
              </p>

              <div className='absolute right-1/2 translate-x-full hidden w-52 h-52 -mt-4 bg-down-left-arrow bg-cover lg:block'></div>
            </div>
          </div>

          <div className="w-full flex flex-col items-start text-center sm:h-auto sm:text-left">
            <div className='w-full h-full lg:w-1/2'>
              <h1 className="text-secondary uppercase text-6xl font-bold">And Now?</h1>
              <p className="prose text-secondary w-full text-base my-4">
                In 2025, at 20 years old, I am in the second semester of my Computer Science degree. Although college takes up part of my day, my passion for programming and game development on Roblox stays strong.
                <br/>
                Currently, in my free time, I am developing my most special project, "Dreams 🌙", which I affectionately call <span className='italic'>"The Project of My Dreams"</span>. Inspired by <a href="https://www.roblox.com/games/6516141723/DOORS" target="_blank" rel="noopener noreferrer" className="text-link">"Doors”</a> by <span className='italic'>LSplash</span>, "Dreams 🌙" blends players' dreams and nightmares with a unique story and essence. Though complex and ambitious, this project has been an incredible learning experience, and I cherish every detail.
                <br/>
                The game is still in development, and I hope to release it soon. For updates, follow me on my official social media <a href="https://x.com/Duelan_BR" target="_blank" rel="noopener noreferrer" className="text-link">X/Twitter</a>.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}
