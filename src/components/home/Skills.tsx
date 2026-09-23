import Link from 'next/link';

const programmingFocus = [
  "Core gameplay systems",
  "UI/UX programming",
  "Inventory and item systems",
  "Skills and abilities",
  "Tower defense and round-based modes",
  "Performance optimization",
  "Refactoring legacy code",
];

const otherSkills = [
  {
    name: "Builder",
    level: "Intermediate",
    icon: "bg-hammer-icon",
    text: "Maps, structures and props, from medieval towns to low-poly arenas.",
    preview: "/images/3d-screenshots/builds-assets/medieval-houses.png",
  },
  {
    name: "Environment Creation",
    level: "Intermediate",
    icon: "bg-environment-icon",
    text: "Lighting, atmosphere and scenery that set the mood, like in my Dreams project.",
    preview: "/images/3d-screenshots/dreams/forest.png",
  },
  {
    name: "Game UI/UX",
    level: "Basic",
    icon: "bg-gui-icon",
    text: "Laying out menus and HUDs. On the code side, UI programming is one of my strongest areas.",
    preview: "/videos/video-thumbnails/inventory-system.png",
  },
  {
    name: "Texturizer",
    level: "Basic",
    icon: "bg-texturizer-icon",
    text: "Texturing props and items, from juice boxes to crystal swords.",
    preview: "/images/3d-screenshots/texturizing/crystal-sword.png",
  },
];

export default function Skills() {
  return (
    <div id="skills" className="h-fit bg-primary px-6 py-20 sm:px-12 sm:py-28 md:px-20 xl:px-40">
      <div className="text-center sm:text-left">
        <h1 className="text-secondary uppercase text-6xl font-bold">My Skills</h1>
        <p className="text-secondary w-full text-base my-4 sm:w-3/5">
          With my years of experience in Roblox Studio, I have learned a lot, making me a versatile game developer. Although programming is the area I enjoy the most and have the most expertise in, I also know how to do a bit of everything in Roblox Studio.
        </p>
      </div>

      <div className="mt-8 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col bg-primary-gray p-6 text-center sm:text-left md:col-span-2 lg:col-span-1 lg:row-span-2">
          <div className="mx-auto h-16 w-16 bg-script-icon bg-contain bg-no-repeat sm:mx-0" />
          <h2 className="mt-4 text-2xl font-bold text-secondary">Programmer</h2>
          <h3 className="text-gray text-lg font-light">Experienced</h3>
          <p className="text-secondary text-base my-4">
            My main area and what I enjoy the most. I've programmed for games with billions of visits like Blade Ball, Fisch, Escape Tsunami For Brainrots and Knockout, and I build every system of my own games from scratch. Some of what I work on:
          </p>
          <ul className="pl-8 text-left font-medium text-secondary">
            {programmingFocus.map((item) => (
              <li key={item} className="list-disc">{item}</li>
            ))}
          </ul>
          <Link href="/works" className="my-4 font-bold underline text-blue-link">
            See My Systems -{'>'}
          </Link>
          <div className="mt-auto aspect-video overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/videos/video-thumbnails/optimized-entity-system.png" alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        {otherSkills.map((skill) => (
          <div key={skill.name} className="flex flex-col bg-primary-gray p-6 text-center sm:text-left">
            <div className={`mx-auto h-12 w-12 bg-contain bg-no-repeat sm:mx-0 ${skill.icon}`} />
            <h2 className="mt-4 text-2xl font-bold text-secondary">{skill.name}</h2>
            <h3 className="text-gray text-lg font-light">{skill.level}</h3>
            <p className="text-secondary text-base my-4">{skill.text}</p>
            <div className="mt-auto aspect-video overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={skill.preview} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
