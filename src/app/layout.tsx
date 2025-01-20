import type { Metadata } from "next";
import "./globals.css";
import FloatingMusic from "@/components/FloatingMusic";
import GravityCursor from "@/components/gravity-cursor";
import PixelTrail from "@/components/fancy/pixel-trail";
import { mixReg } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Excited to Interview for the Band!",
  description:
    "Webpage built to showcase my enthusiasm for joining the band! & also try out physics-based and cursor animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mixReg.className} antialiased dark`}>
        {children}
        <div className="absolute top-0 w-full h-screen z-[-10] overflow-hidden">
          <FloatingMusic />
        </div>
        <div className="absolute top-0 w-full h-screen z-[-10] overflow-hidden">
          <GravityCursor />
        </div>
        <div className="fixed top-0 w-full h-screen overflow-hidden">
          <PixelTrail
            pixelSize={20}
            delay={130}
            fadeDuration={0}
            pixelClassName="bg-[#1ed760]"
          />
        </div>
      </body>
    </html>
  );
}
