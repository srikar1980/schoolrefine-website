import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Merriweather, Poppins } from "next/font/google";
import "./globals.css";

// BODY FONT
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// HEADING FONT
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://schoolrefine.com"),

  title: "SchoolRefine - Smart School ERP System",
  description:
    "Manage your entire school operations in one platform - attendance, exams, fees, reports, and more.",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  themeColor: "#0a1f44",

  openGraph: {
    title: "SchoolRefine - Smart School ERP System",
    description:
      "Manage your entire school operations in one platform - attendance, exams, fees, reports, and more.",
    url: "https://schoolrefine.com",
    siteName: "SchoolRefine",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SchoolRefine - Smart School ERP System",
    description:
      "Manage your entire school operations in one platform - attendance, exams, fees, reports, and more.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${merriweather.variable} scroll-smooth`}
    >
      <body className="min-h-screen font-sans antialiased bg-white text-black">
        {/* WCAG: Skip to content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black p-2 z-50"
        >
          Skip to content
        </a>

        {/* HEADER (will be built next) */}
       <Header />

        {/* MAIN CONTENT */}
        <main id="main-content" role="main">
          {children}
        </main>

        {/* FOOTER (will be built next) */}
       <Footer />
      </body>
    </html>
  );
}