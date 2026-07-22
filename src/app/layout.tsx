import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kanhaji Hospitality – Reliable Food & Mess Services",
    template: "%s | Kanhaji Hospitality",
  },
  description:
    "India's trusted partner for food management. Professional mess services, hospital catering, corporate canteens, and school meal programs. FSSAI certified, 200+ clients, 25+ cities.",
  keywords: [
    "institutional catering",
    "mess management",
    "hospital food service",
    "corporate canteen",
    "school meals",
    "industrial catering",
    "food management company",
    "Kanhaji Hospitality",
    "institutional food service India",
  ],
  openGraph: {
    title: "Kanhaji Hospitality – Reliable Food & Mess Services",
    description:
      "India's trusted partner for professional food management services.",
    url: "https://kanhajihospitality.com",
    siteName: "Kanhaji Hospitality",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://kanhajihospitality.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
