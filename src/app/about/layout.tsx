import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Get to know more about me, what I do, and my journey in game development on Roblox.",
    keywords: "Portfolio, Programming, Roblox, Dev, Game Dev, Scripter, Modeling, Building",
    creator: "Duelan",

    openGraph: {
        title: "Duelan's Portfolio | About",
        description: "Get to know more about me, what I do, and my journey in game development on Roblox.",
        url: "https://duelan.dev",
        // images: [
        //   {
        //     url: "https://duelan.dev/image.jpg",
        //     width: 800,
        //     height: 600,
        //     alt: "Portfolio Image",
        //   },
        // ],
        type: "website",
    },

    // Twitter Card Tags
    twitter: {
        card: "summary_large_image",
        title: "Duelan's Portfolio | About",
        description: "Get to know more about me, what I do, and my journey in game development on Roblox.",
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