import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import ScrollToTop from "@/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://infinityspaceodisha.com"),

  title: {
    default: "Best Interior Designers in Bhubaneswar | Infinity Space",
    template: "%s | Infinity Space",
  },
  manifest: "/site.webmanifest",
  description:
    "Infinity Space is one of the best interior designers in Bhubaneswar offering residential interiors, commercial interiors, modular kitchens, office interiors, wardrobes, false ceiling, turnkey interior solutions, and customized home interior designs.",

  keywords: [
    "Interior Designers in Bhubaneswar",
    "Best Interior Designers in Bhubaneswar",
    "Home Interior Design",
    "Residential Interior Designers",
    "Commercial Interior Designers",
    "Modular Kitchen",
    "Office Interior Design",
    "Bedroom Interior Design",
    "Living Room Interior",
    "False Ceiling Design",
    "Wardrobe Design",
    "Turnkey Interior Solutions",
    "Luxury Interior Designers",
    "Interior Decoration",
    "Kitchen Interior",
    "Interior Design Odisha",
    "Interior Designers Odisha",
    "Home Renovation",
    "Modern Interior Design",
    "Infinity Space",
  ],

  authors: [
    {
      name: "Infinity Space",
      url: "https://infinityspaceodisha.com",
    },
  ],

  creator: "Infinity Space",

  publisher: "Infinity Space",

  alternates: {
    canonical: "https://infinityspaceodisha.com",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // verification: {
  //   google: "google-site-verification: google927414456b017fd8.html",
  // },

  openGraph: {
    title: "Best Interior Designers in Bhubaneswar | Infinity Space",
    description:
      "Infinity Space provides premium residential, commercial, modular kitchen, office, and turnkey interior design services in Bhubaneswar.",

    url: "https://infinityspaceodisha.com",

    siteName: "Infinity Space",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "Infinity Space Interior Design",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Interior Designers in Bhubaneswar | Infinity Space",
    description:
      "Transform your home with Infinity Space - Residential, Commercial, Modular Kitchen & Turnkey Interior Designers in Bhubaneswar.",

    images: ["/web-app-manifest-512x512.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Interior Design",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-screen">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GFEHPG6X0T"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GFEHPG6X0T');
          `}
        </Script>

        <ScrollToTop />
        <Navbar />

        <main className="flex-1 pt-[70px] sm:pt-[75px] lg:pt-[100px]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
