"use client";

import Games from './pages/Games'
import Systems from './pages/Systems'
import Builds from './pages/Builds'
import Texturizing from './pages/Texturizing'

import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const STORAGE_KEY = "activePage";
  const INDEX_STORAGE_KEY = "currentIndex";

  const [activePage, setActivePage] = useState<"games" | "systems" | "builds" | "texturizing" | "gui">(
    () => (localStorage.getItem(STORAGE_KEY) as "games" | "systems" | "builds" | "texturizing" | "gui") || "games"
  );

  const [currentIndex, setCurrentIndex] = useState(
    () => Number(localStorage.getItem(INDEX_STORAGE_KEY)) || 0
  );

  const [hasInteracted, setHasInteracted] = useState(false);

  const handlePageChange = (page: "games" | "systems" | "builds" | "texturizing", index: number) => {
    setActivePage(page);
    localStorage.setItem(STORAGE_KEY, page);
    localStorage.setItem(INDEX_STORAGE_KEY, String(index)); // Salva o índice no localStorage
    setHasInteracted(true);
  };

  const categories = [
    { key: "games", label: "Games" },
    { key: "systems", label: "Systems" },
    { key: "builds", label: "Builds" },
    { key: "texturizing", label: "Texturizing" },
    // { key: "gui", label: "Gui/Ui" },
  ];

  const [isFading, setIsFading] = useState(false);

  const nextCategory = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % categories.length;
        const selectedCategory = categories[newIndex];
        handlePageChange(selectedCategory.key, newIndex);
        return newIndex;
      });
      setIsFading(false);
    }, 300);
  };
  
  const prevCategory = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex - 1 + categories.length) % categories.length;
        const selectedCategory = categories[newIndex];
        handlePageChange(selectedCategory.key, newIndex);
        return newIndex;
      });
      setIsFading(false);
    }, 300);
  };

  return (
    <main>
      <div className="relative h-fit bg-primary min-h-[720px] -mt-20 pt-36 sm:pt-44 pb-24">
        <div className='w-full sm:px-6 md:px-20 xl:px-40 flex flex-wrap justify-center items-center'>
          <p className="text-secondary w-full text-base text-center mb-8">
            I am a flexible developer who enjoys exploring different areas. While using Roblox Studio, I learned much more than just programming, which is my main expertise. This allowed me to create diverse projects and grow along the way.
          </p>

          <ul className="flex justify-center items-center gap-4 w-full">
            <li>
              <button onClick={prevCategory} className='right-0 text-5xl font-base w-14 h-14 inline z-50 md:hidden'>&lt;</button> {/* Previous */} 
            </li>

            {categories.map((category, index) => (
              <li key={index} className={`group relative flex-1 transition-opacity duration-300 ease-in-out 
                ${isFading ? 'opacity-0 sm:opacity-100' : 'opacity-100'}
                ${currentIndex === index ? '' : 'hidden md:block'}
              `}>
                <button
                  onClick={() => handlePageChange(category.key as any, index)}
                  className={`h-14 text-primary flex items-center justify-center rounded-xl w-full text-xl font-semibold uppercase px-2 md:h-10 lg:text-3xl lg:h-14
                  ${hasInteracted ? "duration-200" : ""}
                  ${activePage === category.key ? "bg-primary-blue" : "bg-secondary group-hover:bg-secondary-gray group-hover:text-secondary"}`}
                >
                  {category.label}
                </button>
              </li>
            ))}

            <li>
              <button onClick={nextCategory} className='right-0 text-5xl font-base w-14 h-14 inline z-50 md:hidden'>&gt;</button> {/* Next */}
            </li>
          </ul>
        </div>

        <div>
          {activePage === "games" && <Games />}
          {activePage === "systems" && <Systems />}
          {activePage === "builds" && <Builds />}
          {activePage === "texturizing" && <Texturizing />}
        </div>
      </div>
    </main>
  );
}
