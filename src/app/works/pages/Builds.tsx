"use client";

import Card from '../../../components/Card'
import MediaViewer from '../../../components/MediaViewer'

import { useEffect, useRef, useState } from 'react';

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

  const dreams = [    
    {
      id: "Dreams-Playground",
      image: "/images/3d-screenshots/dreams/playground.png",
      title: "Playground",
      description: null,
      isSmall: null,
    },
    {
      id: "Dreams-Salon",
      image: "/images/3d-screenshots/dreams/salon.png",
      title: "Night Sky Hall",
    },
    {
      id: "Dreams-Forest",
      image: "/images/3d-screenshots/dreams/forest.png",
      title: "Forest Of Memories",
    },
    {
      id: "Dreams-Abandoned-Room",
      image: "/images/3d-screenshots/dreams/abandoned-room.png",
      title: "Abandoned Room",
    },
    {
      id: "Dreams-Corridor",
      image: "/images/3d-screenshots/dreams/corridor.png",
      title: "Hotel Corridor",
    },
  ];

  const builds = [    
    {
      id: "Silent-Woods",
      image: "/images/3d-screenshots/builds-assets/silent-woods.png",
      title: "Silent Woods",
      description: null,
      isSmall: null,
    },
    {
      id: "Magic-Cave",
      image: "/images/3d-screenshots/builds-assets/magic-cave.png",
      title: "Magic Cave",
    },
    {
      id: "Medieval-Building",
      image: "/images/3d-screenshots/builds-assets/medieval-building.png",
      title: "Medieval Building",
    },
    {
      id: "Medieval-Houses",
      image: "/images/3d-screenshots/builds-assets/medieval-houses.png",
      title: "Medieval Houses",
    },
    {
      id: "Low-Poly-Arena",
      image: "/images/3d-screenshots/builds-assets/low-poly-arena.png",
      title: "Low Poly Arena",
    },
    {
      id: "Secret-Room",
      image: "/images/3d-screenshots/builds-assets/secret-room.png",
      title: "Secret Room",
    },
    {
      id: "Dark-Forest",
      image: "/images/3d-screenshots/builds-assets/dark-forest.png",
      title: "Dark Forest",
    },
    {
      id: "Eyes-In-The-Dark",
      image: "/images/3d-screenshots/builds-assets/eyes-in-the-dark.png",
      title: "Eyes In The Dark",
    },
  ];

  function changeViewer(id: string) {
    let selected = dreams.find((card) => card.id === id) || builds.find((card) => card.id === id);

  
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const cardsRef = useRef(null);

  const nextCard = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dreams.length);
      setIsFading(false);
    }, 300);
  };
  
  const prevCard = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + dreams.length) % dreams.length);
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
              <h1 className="text-secondary uppercase text-6xl font-bold">My Builds</h1>
              <p className="text-secondary w-full text-base my-4">
                In addition to being a programmer, I also consider myself a great builder. Although I am not the best, I love creating scenarios and structures for my games, especially when I want to take a break from coding. Check out some of my builds for my game <span className='font-bold'>"Dreams 🌙"</span>:
              </p>
            </div>

            <div className="w-full h-64 sm:h-fit flex flex-wrap justify-start min-[540px]:h-80">
              <button className='block w-[10%] h-full text-secondary text-4xl font-base sm:hidden' onClick={prevCard}>&lt;</button> {/* Previous */}

              <div ref={cardsRef} className='w-[80%] h-full flex flex-wrap justify-start overflow-hidden sm:w-full'>
                {dreams.map((card, index) => (
                  <div
                    key={index}
                    className={
                      `transition-opacity duration-300 ease-in-out p-1 w-full h-full sm:h-56 md:h-80 sm:duration-0 order-${index} ${isFading ? 'opacity-0 sm:opacity-100' : 'opacity-100'} ${currentIndex === index ? '' : 'hidden'} ${currentIndex === index ? '' : 'hidden sm:block' }
                      ${index === 0 ? 'lg:w-1/2' : index === 1 ? 'sm:w-1/2' : 'sm:w-1/2 lg:w-1/3' }
                    `}
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

              <button className='block w-[10%] h-full text-secondary text-4xl font-base sm:hidden' onClick={nextCard}>&gt;</button> {/* Next */}
            </div>

            <div className='w-full h-full lg:w-1/2 px-6 sm:px-0 pt-24'>
              <h1 className="text-secondary uppercase text-6xl font-bold">Builds And Modeling</h1>
              <p className="text-secondary w-full text-base my-4">
                Below are some builds and models I have created for various projects. Each of them was a great satisfaction to make, and I have a deep appreciation for them. I love creating different assets and environments, but I have an even greater passion for crafting fantasy-themed assets and scenes.
              </p>
            </div>

            <div className="w-full h-fit px-[10%] flex flex-wrap justify-start sm:px-[0%]">
              <div className='w-full h-full flex flex-wrap justify-start'>
                {builds.map((card, index) => (
                  <div
                    key={index*2}
                    className="p-1 w-full h-52 sm:w-1/2 sm:h-56 md:h-96 block"
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
