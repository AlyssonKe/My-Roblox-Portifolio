"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface VisitsContextType {
  visits: string;
  setVisits: (value: string) => void;
}

const VisitsContext = createContext<VisitsContextType | undefined>(undefined);

export function VisitsProvider({ children }: { children: ReactNode }) {
  const [visits, setVisits] = useState("");

  useEffect(() => {
    async function fetchVisits() {
      try {
        const res = await fetch("/api/game-visits");
        const data = await res.json();
        setVisits("+" + data.formatted);
      } catch {
        setVisits("");
      }
    }
    fetchVisits();
  }, []);

  return (
    <VisitsContext.Provider value={{ visits, setVisits }}>
      {children}
    </VisitsContext.Provider>
  );
}

export function useVisits() {
  const context = useContext(VisitsContext);
  if (!context) {
    throw new Error("use Visits must be used within a VisitsProvider");
  }
  return context;
}
