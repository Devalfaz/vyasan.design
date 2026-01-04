import { MetadataRoute } from "next";

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Akhilvyasan - Experience Designer Portfolio",
        short_name: "Akhilvyasan",
        description:
            "Experience Designer with 3 years of expertise in creating functional & interactive products. Specializing in product design, visual design, interaction design, and design systems.",
        start_url: "/",
        display: "standalone",
        background_color: "#FFFBF5",
        theme_color: "#FF6B35",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
