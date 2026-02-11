import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Akhilvyasan - Experience Designer | UX/UI Designer Portfolio",
  description: "Experience Designer with 3 years of expertise in creating functional & interactive products. Specializing in product design, visual design, interaction design, and design systems.",
  keywords: [
    "UX Designer",
    "UI Designer",
    "Experience Designer",
    "Product Designer",
    "Visual Design",
    "Interaction Design",
    "Design Systems",
    "Portfolio",
    "Akhilvyasan",
    "No Code Development"
  ],
  authors: [{ name: "Akhilvyasan" }],
  creator: "Akhilvyasan",
  publisher: "Akhilvyasan",
  metadataBase: new URL('https://vyasan.design'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vyasan.design",
    title: "Akhilvyasan - Experience Designer | UX/UI Designer Portfolio",
    description: "Experience Designer with 3 years of expertise in creating functional & interactive products. View my portfolio of design work.",
    siteName: "Akhilvyasan Portfolio",
    images: [
      {
        url: "/vyasan.png",
        width: 165,
        height: 210,
        alt: "Akhilvyasan - Experience Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhilvyasan - Experience Designer | UX/UI Designer Portfolio",
    description: "Experience Designer with 3 years of expertise in creating functional & interactive products.",
    images: ["/vyasan.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://vyasan.design" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Akhilvyasan",
              "jobTitle": "Experience Designer",
              "description": "Experience Designer with 3 years of expertise in creating functional & interactive products",
              "url": "https://vyasan.design",
              "image": "https://vyasan.design/vyasan.png",
              "sameAs": [
                // Add your social media links here
                "https://www.linkedin.com/in/akhil-vyasan-4986492a4",
              ],
              "knowsAbout": [
                "Product Design",
                "Visual Design",
                "Interaction Design",
                "Design Systems",
                "UX Design",
                "UI Design",
                "No Code Development"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Experience Designer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "India"
                },
                "skills": "Product Design, Visual Design, Interaction Design, Design Systems, UX/UI Design"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
