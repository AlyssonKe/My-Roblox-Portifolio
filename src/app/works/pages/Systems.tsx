"use client";

import Card from '../../../components/Card'
import MediaViewer from '../../../components/MediaViewer'

import { useRef, useState } from 'react';

export default function Systems() {  
  const [viewerVisible, setViewerVisible] = useState(false);
  const [viewerData, setViewerData] = useState<{
    id: string;
    image: string;
    video: string | null;
    title: string | null;
    description: string | null;
    link: string | null;
    isBig: boolean | null;
    isSmall: boolean | null;
  } | null>(null);
  
  const toggleViewer = () => {
    setViewerVisible(!viewerVisible);
  };

  const cards = [    
    // Videos
    {
      id: "Td-Base-System",
      image: "/videos/video-thumbnails/td-base-system.png",
      video: "/videos/td-base-system.mp4",
      title: "TD Base System",
      description:
        "I started a Tower Defense game project to learn new concepts and improve others. I built the core mechanics, such as the placement system, where I used Spring to smooth unit movement. I also had the opportunity to delve deeper into Bezier Curves, which I used to animate arrows indicating the direction from which enemies approach. Additionally, I implemented a three-path upgrade system, targeting priority options (first, last, nearest, farthest, etc), a troop limit, individual unit statistics, status effects (burning, slowing, etc.), enemy waves, and many other systems.",
    },
    {
      id: "Optimized-Entity-System",
      image: "/videos/video-thumbnails/optimized-entity-system.png",
      video: "/videos/optimized-entity-system.mp4",
      title: "Optimized Entity System",
      description:
        "I created this system while looking for a more optimized solution for humanoids, as I was concerned about how having many humanoid units could cause some lag on the server. I tested several methods to optimize this and found a solution where, on the server side, only the HumanoidRootPart is rendered, leaving the visual parts and body to the client side. This prevents the server from becoming too overcharged.",
    },
    {
      id: "Td-Lobby-System",
      image: "/videos/video-thumbnails/td-lobby-system.png",
      video: "/videos/td-lobby-system.mp4",
      title: "TD Lobby System",
      description:
        "This is a system I developed for the Tower Defense. It is a match-joining system and a mechanism to switch maps when the timer ends (though only one map is shown in the video). I also implemented a smooth camera movement system that follows the player's character using the Spring module. Additionally, the match teleport system is robust and optimized. I used modules like Trove to clean up connections after teleportation.",
    },
    {
      id: "Inventory-System",
      image: "/videos/video-thumbnails/inventory-system.png",
      video: "/videos/inventory-system.mp4",
      title: "Inventory System",
      description:
        "I created this complex inventory system using the ProfileService module to store the players' item data. I also created specific categories for each item type, as well as a skill upgrade system, show selected, equip system, rarity, stackable items and many other systems. All items are stored in an array on the server side, and only the information about the items the player has is sent, preventing explorers from accessing information they shouldn't have and optimizing the networking data sent to clients.",
    },
    {
      id: "Skill-System",
      image: "/videos/video-thumbnails/skill-system.png",
      video: "/videos/skill-system.mp4",
      title: "Skill System",
      description:
        "This was an extremely fun system to work on; it's a skill system, where most of the skills have levels that can be upgraded from 1 to 3 (in the video, all the skills are at the maximum level of 3). Each skill was scripted in different modules for organizational reasons and practicality. I created 12 skills initially, but in the video, I showed the 4 that I think are the most interesting. Since each skill behaves differently from the others, I had the opportunity to explore many resources and techniques for each one."
    },
    {
      id: "Murderer-Mystery-System",
      image: "/videos/video-thumbnails/murderer-mystery-system.png",
      video: "/videos/murderer-mystery-system.mp4",
      title: "Murderer Mystery System",
      description:
        "This Murder Mystery system is a rework of a game I created 5 years ago. Recently, I decided to rewrite it from scratch, and I was amazed at how much I've evolved. Now, it’s a complete, robust, and optimized system, with features like tools (knife and revolver), roles (murderer, sheriff, innocent), skills, skins, ragdoll, headshot rewards with knife and coin explosion, and more. Since the system requires constant testing with other players, I added an NPC debug feature to test player-related actions, such as killing, effects, ragdoll, etc.",
    },
    {
      id: "Chase",
      image: "/videos/video-thumbnails/chase.png",
      video: "/videos/chase.mp4",
      title: "Chase [Unfinished]",
      description:
        `This was with no doubt the coolest thing I have ever made (I still haven’t finished yet). I created this chase for my game "Dreams 🌙", and this is the base of the chase, though I still plan to change and improve a lot of things. The manipulation of the scenery was extremely fun to do, and the procedural room generation, to avoid always having the same rooms and the same order of events, was something really challenging but incredible to do.`,
    },
    {
      id: "Game-Select",
      image: "/videos/video-thumbnails/game-select.png",
      video: "/videos/game-select.mp4",
      title: "Game Select",
      description:
        "This system that I created about 4 years ago for a game lobby project, despite not evolving much, provided me with a lot of experience, especially in programming and manipulating GUIs, which has served as a foundation for me to improve even more today.",
    },
    {
      id: "Item-Inventory-System",
      image: "/videos/video-thumbnails/item-inventory-system.png",
      video: "/videos/item-inventory-system.mp4",
      title: "Item Inventory System",
      description:
        "This system I created close to the game select system, I was starting to delve deeper into GUI manipulation, and making this system was really challenging, even for me at the time. But in the end, I managed to achieve what I wanted. I based it heavily on the Minecraft inventory style, moving items from slot to slot and equipping items to the character's body.",
    },
  ];

  function changeViewer(id: string) {
    const selected = cards.find((card) => card.id === id);
  
    if (selected) {
      setViewerData({
        id: selected.id,
        image: selected.image,
        video: selected.video ?? null,
        title: selected.title ?? null,
        description: selected.description ?? null,
        link: null,
        isBig: null,
        isSmall: null,
      });
      
      setViewerVisible(true);
    }
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const cardsRef = useRef(null);

  const nextCard = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      setIsFading(false);
    }, 300);
  };
  
  const prevCard = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
      setIsFading(false);
    }, 300);
  };

  return (
    <div>
      <MediaViewer data={viewerData} onClose={toggleViewer} viewerVisible={viewerVisible} />

      <div className="h-fit bg-primary px-0 sm:px-12 md:px-20 xl:px-40">
        <div className="flex-row z-10 mt-0 sm:-mt-0 space-y-32 pt-12 sm:pt-24">
          <div className="w-full flex flex-col items-start text-center sm:h-auto sm:text-left">
            <div className='w-full h-full lg:w-1/2 px-6 sm:px-0'>
              <h1 className="text-secondary uppercase text-6xl font-bold">My Systems</h1>
              <p className="text-secondary w-full text-base my-4">
                Since I started on Roblox, I've learned a lot and created numerous systems, many of which I didn’t end up using. However, they served as the foundation for much of my knowledge and learning. Below, you'll find some of the systems I've developed.
              </p>
            </div>

            <div className="w-full h-64 sm:h-fit flex flex-wrap justify-start min-[540px]:h-80">
              <button className='block w-[10%] h-full text-secondary text-4xl font-base sm:hidden' onClick={prevCard}>&lt;</button> {/* Previous */}

              <div ref={cardsRef} className='w-[80%] h-full flex flex-wrap justify-start overflow-hidden sm:w-full'>
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-300 ease-in-out p-1 w-full h-full sm:w-1/2 sm:h-56 md:w-1/3 xl:w-1/4 sm:duration-0 ${isFading ? 'opacity-0 sm:opacity-100' : 'opacity-100'} ${currentIndex === index ? '' : 'hidden'} ${currentIndex === index ? '' : 'hidden sm:block' }`}
                  >
                    <Card
                      bg={card.image}
                      title={card.title}
                      changeViewer={changeViewer}
                      viewerId={card.id}
                      cardType={"Video"}
                    />
                  </div>
                ))}
              </div>

              <button className='block w-[10%] h-full text-secondary text-4xl font-base sm:hidden' onClick={nextCard}>&gt;</button> {/* Next */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
