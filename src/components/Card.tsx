"use client";

import { useEffect, useState } from "react";

const thumbnailCache: Record<number, string> = {}; // cache por universeId
const gameTitleCache: Record<number, string> = {};

interface CardProps {
  bg: string;
  title?: string| null;
  changeViewer: (viewerId: string) => void;
  viewerId: string;
  cardType?: string | null;
  universeId?: number,
}

const Card: React.FC<CardProps> = ({ bg, title, changeViewer, viewerId, cardType, universeId}) => {
  const [thumbnail, setThumbnail] = useState(bg);
  const [gameTitle, setGameTitle] = useState(title);

  useEffect(() => {
    async function fetchThumbnail() {
      if (cardType === "Game" && universeId) {
        if (thumbnailCache[universeId]) {
          setThumbnail(thumbnailCache[universeId]);
        } else {
          try {
            const res = await fetch(`/api/thumbnail?id=${universeId}`);
            const data = await res.json();
            if (data?.imageUrl) {
              thumbnailCache[universeId] = data.imageUrl; // salva no cache
              setThumbnail(data.imageUrl);
            } else {
              setThumbnail(bg);
            }
          } catch {
            setThumbnail(bg);
          }
        }
      } else {
        setThumbnail(bg);
      }
    }

    fetchThumbnail();
  }, [viewerId, cardType, bg, universeId]);

  useEffect(() => {
    async function fetchGameTitle() {
      if (cardType === "Game" && universeId) {
        if (gameTitleCache[universeId]) {
          setGameTitle(gameTitleCache[universeId]);
        } else {
          try {
            const res = await fetch(`/api/gameInfo?id=${universeId}`);
            const data = await res.json();
            if (data?.name) {
              gameTitleCache[universeId] = data.name;
              setGameTitle(data.name);
            } else {
              setGameTitle(title);
            }
          } catch {
            setGameTitle(title);
          }
        }
      } else {
        setGameTitle(title);
      }
    }

    fetchGameTitle();
  }, [viewerId, cardType, title, universeId]);

  return (
    <>
      {(universeId
        ? thumbnail !== bg
        : true
      ) && (
        <div className='w-full h-full'>
          <div className='w-full h-full bg-primary-gray'>
            <div className={`w-full ${cardType === "Game" ? 'h-[85%] px-2 pt-2' : cardType === "ImageViewer" ? 'h-full px-0 pt-0'  : 'h-[87%] px-2 pt-2'}`} >
              <div className='relative w-full h-full overflow-hidden'>
                {cardType === "Video" && (
                  <div className='absolute w-full h-full flex items-center justify-center'>
                    <svg className='z-10 w-12 h-12 fill-primary pointer-events-none' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                      <path d="M229.5,0C102.751,0,0,102.751,0,229.5S102.751,459,229.5,459S459,356.249,459,229.5S356.249,0,229.5,0z M310.292,239.651 l-111.764,76.084c-3.761,2.56-8.63,2.831-12.652,0.704c-4.022-2.128-6.538-6.305-6.538-10.855V153.416 c0-4.55,2.516-8.727,6.538-10.855c4.022-2.127,8.891-1.857,12.652,0.704l111.764,76.084c3.359,2.287,5.37,6.087,5.37,10.151 C315.662,233.564,313.652,237.364,310.292,239.651z"></path>
                    </svg>
                  </div>
                )}

                <button onClick={() => changeViewer(viewerId)} className='relative w-full h-full'>
                  <div
                    className='relative bg-cover bg-top h-full w-full items-end sm:h-full duration-300 group-hover:duration-300 hover:scale-110'
                    style={{ backgroundImage: `url(${thumbnail})` }}
                  >
                    <div className='relative bg-game-shadow h-full w-full items-end sm:h-full'></div>
                  </div>
                </button>
              </div>
            </div>

            {gameTitle && (
              <div className={`px-2 flex items-center ${cardType === "Game" ? 'h-[15%]' : 'h-[13%]'}`}>
                <span className={`text-secundary ${cardType === "Game" ? 'font-bold text-2xl' : 'font-semibold text-lg'} overflow-hidden whitespace-nowrap text-ellipsis`}>{gameTitle}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
  
export default Card;