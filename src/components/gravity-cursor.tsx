/* eslint-disable @next/next/no-img-element */
"use client";

import Gravity, {
  MatterBody,
} from "@/components/fancy/cursor-attractor-and-gravity";

export default function Preview() {
  return (
    <div className="w-full h-full">
      <Gravity
        //attractorPoint={{ x: "33%", y: "50%" }}
        attractorStrength={0.0}
        cursorStrength={0.0005}
        cursorFieldRadius={200}
        className="w-full h-full"
      >
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x={`${Math.random() * 100}%`}
          y={`${Math.random() * 100}%`}
        >
          <img
            src={`/spotify-icon.svg`}
            alt={`Avatar`}
            className="rounded-full object-cover hover:cursor-pointer"
            width="99"
            height="99"
          />
        </MatterBody>

        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x={`${Math.random() * 100}%`}
          y={`${Math.random() * 30}%`}
        >
          <img
            src={`/spotify-icon.svg`}
            alt={`Avatar`}
            className="rounded-full object-cover hover:cursor-pointer"
            width="79"
            height="79"
          />
        </MatterBody>

        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x={`${Math.random() * 100}%`}
          y={`${Math.random() * 30}%`}
        >
          <img
            src={`/spotify-icon.svg`}
            alt={`Avatar`}
            className="rounded-full object-cover hover:cursor-pointer"
            width="59"
            height="59"
          />
        </MatterBody>
      </Gravity>
    </div>
  );
}
