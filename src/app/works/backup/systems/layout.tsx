import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Systems",
    description: "Discover some of the many systems I've created in my life as a Roblox game developer.",
    keywords: "Portifolio, Programming, Roblox, Dev, Game Dev, Scripter, Modeling, Building",
    creator: "Duelan",

    openGraph: {
        title: "Duelan's Portifolio | Systems",
        description: "Discover some of the many systems I've created in my life as a Roblox game developer.",
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
        title: "Duelan's Portifolio | Systems",
        description: "Discover some of the many systems I've created in my life as a Roblox game developer.",
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