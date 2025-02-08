import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "3D",
    description: "Check out some of the many builds and environments I've created as a game developer on Roblox.",
    keywords: "Portifolio, Programming, Roblox, Dev, Game Dev, Scripter, Modeling, Building",
    creator: "Duelan",

    openGraph: {
        title: "Duelan's Portifolio | 3D",
        description: "Check out some of the many builds and environments I've created as a game developer on Roblox.",
        url: "https://duelan.dev",
        // images: [
        //   {
        //     url: "https://duelan.dev/image.jpg",
        //     width: 800,
        //     height: 600,
        //     alt: "Portifolio Image",
        //   },
        // ],
        type: "website",
    },

    // Twitter Card Tags
    twitter: {
        card: "summary_large_image",
        title: "Duelan's Portifolio | 3D",
        description: "Check out some of the many builds and environments I've created as a game developer on Roblox.",
        // images: ["https://duelan.dev/image-twitter.jpg"],
    },
};

export default function SystemsLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return <>{children}</>;
}