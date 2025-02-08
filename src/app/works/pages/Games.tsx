"use client";

import Card from '../../../components/Card'
import MediaViewer from '../../../components/MediaViewer'

import { useRef, useState } from 'react';

export default function Games() {  
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
      id: "TT",
      image: "/images/game-thumbnails/TT.png",
      link: "https://www.roblox.com/games/4237861040/Treacherous-Tower",
      title: "Treacherous Tower",
      description:
        "Treacherous Tower was my first big success. In it, players climb a tower full of obstacles that change every 60 seconds, using power-ups to help or hinder others. Released with no expectations, it was surprisingly successful, reaching almost 30 thousand simultaneous players. As the main developer, I created everything from scratch, including systems like tower generation, power-ups, shop, missions, leaderboard, and more.",
    },
    {
      id: "ECT",
      image: "/images/game-thumbnails/ECT.png",
      link: "https://www.roblox.com/games/118073417231051/Elemental-Castle-Tycoon",
      title: "Elemental Castle Tycoon",
      description:
        "Build a magnificent castle and acquire incredible and unique powers to fight against your enemies. Dominate the server and become invincible. This was a solo project I created during my first semester break in college. In a short period of time, I was able to apply the knowledge I had learned and improve various skills. I was responsible for all the building, modeling, programming, and visual effects in the game. It was such an enriching experience since it had been a while since I last created something on my own.",
    },
    {
      id: "PPT",
      image: "/images/game-thumbnails/PPT.png",
      link: "https://www.roblox.com/games/16497788573/Pink-Palace-Tycoon",
      title: "Pink Palace Tycoon",
      description:
        "In Pink Palace Tycoon, you build the palace of your dreams while facing fun challenges and minigames. Explore a magical world, relax in your pool, sunbathe on the beach, and dress up with style. This was my first project with a team of 6 people, each person having a specific task. I was responsible for the main programming, creating systems such as avatar customization, tycoon progression and saving, missions, minigames, interactions, shop, NPCs, rewards, and more. Additionally, I was in charge of coordinating the team at the beginning of the project.",
    },
    {
      id: "John-And-Mark",
      image: "/images/game-thumbnails/john-and-mark.png",
      link: "https://www.roblox.com/games/14108196267/The-Adventures-of-John-and-Mark",
      title: "John And Mark",
      description:
        `"The Adventures of John and Mark" is a game that narrates the story of a character who moves to a new house and finds a cartoon tape starring John and his brother Mark. What seems like just a peculiar cartoon soon reveals itself as a mystery, leading to the discovery of a disturbing past about the brothers. This project was a collaboration with my best friend, who was responsible for most of the visual assets and modeling, while I developed all the systems of the game, including shop, lobby match, dialogues and choices, inventory, animations, and more.`,
    },
  ];

  function changeViewer(id: string) {
    const selected = cards.find((card) => card.id === id);
  
    if (selected) {
      setViewerData({
        id: selected.id,
        image: selected.image,
        video: null,
        title: selected.title ?? null,
        description: selected.description ?? null,
        link: selected.link ?? null,
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
              <h1 className="text-secondary uppercase text-6xl font-bold">My Games</h1>
              <p className="text-secondary w-full text-base my-4">
                During my journey in Roblox Studio, I have developed a variety of games, each one contributing significantly to my growth as a developer. Although not all of them were finished, each project provided me with valuable lessons and experiences. Below are some games I have created:
              </p>
            </div>

            <div className="w-full h-64 sm:h-fit flex flex-wrap justify-start min-[540px]:h-80">
              <button className='block w-[10%] h-full text-secondary text-4xl font-base sm:hidden' onClick={prevCard}>&lt;</button> {/* Previous */}

              <div ref={cardsRef} className='w-[80%] h-full flex flex-wrap justify-start overflow-hidden sm:w-full'>
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-300 ease-in-out p-1 w-full h-full sm:w-1/2 sm:h-56 md:h-80 lg:w-1/3 sm:duration-0 ${isFading ? 'opacity-0 sm:opacity-100' : 'opacity-100'} ${currentIndex === index ? '' : 'hidden'} ${currentIndex === index ? '' : 'hidden sm:block' }`}
                  >
                    <Card
                      bg={card.image}
                      title={card.title}
                      changeViewer={changeViewer}
                      viewerId={card.id}
                      cardType={"Game"}
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
