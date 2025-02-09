"use client";

import Card from '../../../components/Card'
import MediaViewer from '../../../components/MediaViewer'

import { useState } from 'react';

export default function Builds() {  
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

  const texturizing = [    
    {
      id: "Green-Monster",
      image: "/images/3d-screenshots/texturizing/green-monster.png",
      title: "Green Monster",
      description: 'Modeling by <a href="https://x.com/NekoAltz" target="_blank" rel="noopener noreferrer" class="text-link">Neko_Altz</a>',
    },
    {
      id: "Truck",
      image: "/images/3d-screenshots/texturizing/truck.png",
      title: "Truck",
      description: 'Modeling by <a href="https://x.com/NekoAltz" target="_blank" rel="noopener noreferrer" class="text-link">Neko_Altz</a>',
    },
    {
      id: "Monster-Chest",
      image: "/images/3d-screenshots/texturizing/monster-chest.png",
      title: "Monster Chest",
      description: 'Modeling by <a href="https://x.com/NekoAltz" target="_blank" rel="noopener noreferrer" class="text-link">Neko_Altz</a>',
    },
    {
      id: "Box-Of-Juice",
      image: "/images/3d-screenshots/texturizing/box-of-juice.png",
      title: "Box Of Juice",
      description: 'Modeling by <a href="https://x.com/NekoAltz" target="_blank" rel="noopener noreferrer" class="text-link">Neko_Altz</a>',
      isSmall: true,
    },
    {
      id: "Sanity-Pills",
      image: "/images/3d-screenshots/texturizing/sanity-pills.png",
      title: "Sanity Pills",
      isSmall: true,
    },
    {
      id: "Crystal-Sword",
      image: "/images/3d-screenshots/texturizing/crystal-sword.png",
      title: "Crystal Sword",
      description: 'Modeling by <a href="https://x.com/NekoAltz" target="_blank" rel="noopener noreferrer" class="text-link">Neko_Altz</a>',
      isSmall: true,
    },
    {
      id: "Magic-Book",
      image: "/images/3d-screenshots/texturizing/magic-book.png",
      title: "Magic Book",
      description: 'Modeling by <a href="https://x.com/NekoAltz" target="_blank" rel="noopener noreferrer" class="text-link">Neko_Altz</a>',
      isSmall: true,
    },
    {
      id: "Plush-Bunny",
      image: "/images/3d-screenshots/texturizing/plush-bunny.png",
      title: "Plush Bunny",
      description: 'Modeling by <a href="https://x.com/NekoAltz" target="_blank" rel="noopener noreferrer" class="text-link">Neko_Altz</a>',
      isSmall: true,
    },
  ];

  function changeViewer(id: string) {
    let selected = texturizing.find((card) => card.id === id);

  
    if (selected) {
      setViewerData({
        id: selected.id,
        image: selected.image,
        video: null,
        title: selected.title,
        description: selected.description ?? null,
        link: null,
        isBig: true,
        isSmall: selected.isSmall ?? null,
      });
      
      setViewerVisible(true);
    }
  }

  return (
    <div>
      <MediaViewer data={viewerData} onClose={toggleViewer} viewerVisible={viewerVisible} />

      <div className="h-fit bg-primary px-0 sm:px-12 md:px-20 xl:px-40">
        <div className="flex-row z-10 mt-0 sm:-mt-0 space-y-32 pt-12 sm:pt-24">
          <div className="w-full flex flex-col items-start text-center sm:h-auto sm:text-left">
            <div className='w-full h-full lg:w-1/2 px-6 sm:px-0'>
              <h1 className="text-secondary uppercase text-6xl font-bold">Texture</h1>
              <p className="text-secondary w-full text-base my-4">
                It's the area I have the least expertise in and practice the least, but when I take the time to texture an asset, I truly love it. Bringing color to something and seeing it come to life is incredibly rewarding for me. Below are some assets I have textured.
              </p>
            </div>

            <div className="w-full h-fit px-[10%] flex flex-wrap justify-start sm:px-[0%]">
              <div className='w-full h-full flex flex-wrap justify-start'>
                {texturizing.map((card, index) => (
                  <div
                    key={index*2}
                    className="p-1 w-full h-52 lg:w-1/3 sm:h-80 lg:h-80 2xl:h-96 min-[400px]:w-1/2 block"
                  >
                    <Card
                      bg={card.image}
                      title={null}
                      changeViewer={changeViewer}
                      viewerId={card.id}
                      cardType={"ImageViewer"}
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
