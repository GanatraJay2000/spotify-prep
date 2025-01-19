// import ScrambleHoverPreview from "@/components/scramblehover";
import Typewriter from "@/components/fancy/typewriter";
import { uiTitle } from "@/lib/fonts";
import UnderlineToBackground from "@/components/fancy/underline-to-background";
import { LinkPreview } from "@/components/fancy/link-preview";
import Image from "next/image";
export default function Home() {
  return (
    <div className="text-white">
      <div className="h-screen flex flex-col justify-center items-center">
        <a href="" className="text-7xl font-light z-10">
          <Typewriter
            text={["Excited to Interview for the Band!"]}
            speed={100}
            className={`text-white bg-black/70 px-5 py-2 rounded font-black !tracking-wide [word-spacing:5px] ${uiTitle.className}`}
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          />
        </a>
      </div>
      <div className="h-screen relative flex justify-center items-center ">
        <div className="mt-10 space-y-10 text-center md:text-2xl lg:text-3xl xl:text-4xl z-10 lg:w-1/2 p-2 lg:p-0 font-light text-neutral-200">
          <div className="">
            From{" "}
            <LinkPreview
              imageSrc="/images/dhc.png"
              url="https://www.linkedin.com/in/jay-ganatra/overlay/1732755656546/single-media-viewer/?profileId=ACoAABacFZUBEZ0SjvpF1ksjtDOokpphjE5iHQI"
            >
              <UnderlineToBackground label="Ed-Tech" targetTextColor="#fff" />
            </LinkPreview>{" "}
            - to{" "}
            <LinkPreview
              imageSrc="/images/flow.png"
              url="https://www.linkedin.com/in/jay-ganatra/overlay/1733086513335/single-media-viewer/?profileId=ACoAABacFZUBEZ0SjvpF1ksjtDOokpphjE5iHQI"
            >
              <UnderlineToBackground label="Sales" targetTextColor="#fff" />
            </LinkPreview>{" "}
            - to{" "}
            <LinkPreview
              imageSrc="/images/blockhouse.png"
              url="https://blockhouse.app"
            >
              <UnderlineToBackground label="Finance" targetTextColor="#fff" />
            </LinkPreview>
          </div>
          <div className="">
            I’ve always given my best, learning from my team, staying updated
            with the latest trends, and experimenting with new technologies,
          </div>
          <div>
            and whenever I get some time, I try to work on some side-projects
            that can simplify my life like{" "}
            <LinkPreview imageSrc="/images/tambola.png">
              <UnderlineToBackground
                label="Musical Tambola (Bingo)"
                targetTextColor="#fff"
              />
            </LinkPreview>{" "}
            <span className="text-neutral-500">
              (1 of my first few projects)
            </span>{" "}
            - to{" "}
            <LinkPreview imageSrc="/images/splitsmart.png">
              <UnderlineToBackground
                label="SplitSmart"
                targetTextColor="#fff"
              />
            </LinkPreview>{" "}
            <span className="text-neutral-500">(my latest project)</span>
          </div>
        </div>
        <a
          href="https://jayganatra.com"
          className="absolute bottom-0 flex space-x-4 items-center text-neutral-600 p-5 z-10"
        >
          <div className="">
            <Image
              src="/logo.png"
              alt="Logo - Jay Ganatra"
              width="40"
              height="40"
              className=" "
            />
          </div>{" "}
          <span className="text-lg">Jay Ganatra</span>
        </a>
      </div>
    </div>
  );
}
