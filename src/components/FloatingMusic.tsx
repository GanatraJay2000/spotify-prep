import React from "react";
import Float from "@/components/fancy/float";
import { cn } from "@/lib/utils";
function FloatingMusic() {
  const colors = [
    "#6900ba",
    "#fae62d",
    "#1ed760",
    "#f79bd2",
    "#fcfcfc",
    "#3c00e4",
    "#ff4834",
  ];
  return (
    <div className="h-full w-full">
      {[...Array(10)].map((item, i) => (
        <React.Fragment key={i}>
          <Float
            timeOffset={i * 0.8}
            amplitude={[
              15 + Math.random() * 20,
              25 + Math.random() * 30,
              20 + Math.random() * 25,
            ]}
            rotationRange={[
              10 + Math.random() * 10,
              10 + Math.random() * 10,
              5 + Math.random() * 5,
            ]}
            speed={0.3 + Math.random() * 0.4}
            className={cn(
              "absolute text-lg flex sm:text-xl md:text-2xl font-light hover:underline cursor-pointer text-[#0015ff]"
            )}
            styles={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors[i % colors.length]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-music-2"
            >
              <circle cx="8" cy="18" r="4" />
              <path d="M12 18V2l7 4" />
            </svg>
          </Float>
          <Float
            timeOffset={i * 0.8}
            amplitude={[
              15 + Math.random() * 20,
              25 + Math.random() * 30,
              20 + Math.random() * 25,
            ]}
            rotationRange={[
              10 + Math.random() * 10,
              10 + Math.random() * 10,
              5 + Math.random() * 5,
            ]}
            speed={0.3 + Math.random() * 0.4}
            className={cn(
              "absolute text-lg flex sm:text-xl md:text-2xl font-light hover:underline cursor-pointer text-[#0015ff]"
            )}
            styles={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors[i % colors.length]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-music-2"
            >
              <path d="M9 18V5l12-2v13" />
              <path d="m9 9 12-2" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </Float>
        </React.Fragment>
      ))}
    </div>
  );
}

export default FloatingMusic;
