"use client";

import Card from '../../../components/Card'
import MediaViewer from '../../../components/MediaViewer'
import { games } from "@/data/games";

import { useRef, useState } from 'react';

export default function Games() {  
  const [viewerVisible, setViewerVisible] = useState(false);
  const [viewerData, setViewerData] = useState<{
    id: string;
    universeId?: number;
    contribuition?: boolean;
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

  function changeViewer(id: string) {
    const selected = games.find((card) => card.id === id);
  
    if (selected) {
      setViewerData({
        id: selected.id,
        universeId: selected.universeId,
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

  const contributionCards = games.filter(card => card.contribuition === true);
  const myGamesCards = games.filter(card => !card.contribuition);

  return (
    <div>
      <MediaViewer data={viewerData} onClose={toggleViewer} viewerVisible={viewerVisible} />

      <div className="h-fit bg-primary px-0 sm:px-12 md:px-20 xl:px-40">
        <div className="flex-row z-10 mt-0 sm:-mt-0 space-y-32 pt-12 sm:pt-24">
          <div className="w-full flex flex-col items-start text-center sm:h-auto sm:text-left">
            <div className='w-full h-full lg:w-1/2 px-6 sm:px-0'>
              <h1 className="text-secondary uppercase text-6xl font-bold">Contribuitions</h1>
              <p className="text-secondary w-full text-base my-4">
                I'm currently working on <a href="https://www.roblox.com/games/13772394625/Blade-Ball" target="_blank" rel="noopener noreferrer" className="text-link">Blade Ball</a>, and it's been an incredibly rewarding experience. Beyond expanding my professional horizons, I have the honor of working alongside an amazing team.
                <br/>
                In addition to <a href="https://www.roblox.com/games/13772394625/Blade-Ball" target="_blank" rel="noopener noreferrer" className="text-link">Blade Ball</a>, I've also contributed to several other projects throughout my journey. Below are some of the games I've had the opportunity to work on:
              </p>
            </div>

            <div className="w-full h-fit px-[10%] flex flex-wrap justify-start sm:px-[0%]">
              <div className='w-full h-full flex flex-wrap justify-start'>
                {contributionCards.map((card, index) => (
                  <div
                    key={index}
                    className="p-1 w-full h-80 sm:w-1/2 md:h-80 lg:w-1/3 sm:duration-0"
                  >
                    <Card
                      bg={card.image}
                      title={card.title}
                      changeViewer={changeViewer}
                      viewerId={card.id}
                      cardType={"Game"}
                      universeId={card.universeId}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-start text-center sm:h-auto sm:text-left">
            <div className='w-full h-full lg:w-1/2 px-6 sm:px-0'>
              <h1 className="text-secondary uppercase text-6xl font-bold">My Games</h1>
              <p className="text-secondary w-full text-base my-4">
                During my journey in Roblox Studio, I have developed a variety of games, each one contributing significantly to my growth as a developer. Although not all of them were finished, each project provided me with valuable lessons and experiences. Below are some games I have created:
              </p>
            </div>

            <div className="w-full h-fit px-[10%] flex flex-wrap justify-start sm:px-[0%]">
              <div className='w-full h-full flex flex-wrap justify-start'>
                {myGamesCards.map((card, index) => (
                  <div
                    key={index}
                    className="p-1 w-full h-80 sm:w-1/2 md:h-80 lg:w-1/3 sm:duration-0"
                  >
                    <Card
                      bg={card.image}
                      title={card.title}
                      changeViewer={changeViewer}
                      viewerId={card.id}
                      cardType={"Game"}
                      universeId={card.universeId}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
