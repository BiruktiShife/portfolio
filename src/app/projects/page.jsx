"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";

const projects = [
  {
    title: "Finance Management",
    category: "fullstack",
    image: "/finance.png",
    stack: ["React", "TypeScript", "Chakra UI", "MongoDB", "NodeJs"],
    github: "https://github.com/BiruktiShife/-Finance-Management",
  },
  {
    title: "Local Language Translator",
    category: "fullstack",
    image: "/language.png",
    stack: ["Nextjs", "TailwindCSS", "Built in API"],
    github: "https://github.com/BiruktiShife/ethiotirgum",
  },
  {
    title: "Study Planner",
    category: "fullstack",
    image: "/study.png",
    stack: ["Nextjs", "MongoDB", "ShadCN"],
    github: "https://github.com/BiruktiShife/Study-Planning",
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [swiper, setSwiper] = useState(null);

  const onSlideChange = (item) => {
    setCurrentProject(projects[item?.activeIndex]);
  };
  const index =
    projects.findIndex((item) => item.title === currentProject?.title) + 1;

  const nexto = () => {
    swiper.slideNext();
  };
  const prev = () => {
    swiper.slidePrev();
  };

  return (
    <div
      className={cn("max-w-4xl mx-auto 2xl:pt-60 pt-32 px-3 pb-4 min-h-screen")}
    >
      <div>
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          className="text-center mb-10 "
        >
          <h3>
            {" "}
            My <span>Projects</span>
          </h3>
        </MotionDiv>
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveDown}
          transition={transition.moveDown}
          className="flex lg:flex-row  flex-col-reverse lg:gap-0 gap-10 lg:pb-0 pb-7 items-center w-full"
        >
          <div className="flex-1 space-y-3">
            <h2 className="text-6xl font-semibold text-primary">
              {index < 10 ? `0${index}` : index}
            </h2>
            <h3>{currentProject?.title}</h3>
            <div className="mt-2 text-primary font-semibold tracking-wider space-x-2">
              {currentProject?.stack?.map((item) => (
                <Badge
                  key={item}
                  variant={"outline"}
                  className="text-primary text-base"
                >
                  {item}
                </Badge>
              ))}
            </div>
            <br />
            {/* GitHub Button for the Current Project */}
            <div className="flex gap-x-3">
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={currentProject.github} // Dynamically set the GitHub URL based on currentProject
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent p-2.5 rounded-full"
                    >
                      <Image
                        src="/Github.svg"
                        alt={`${currentProject.title} GitHub`}
                        width={40}
                        height={40}
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="flex-1 flex items-center flex-col ">
            <Swiper
              breakpoints={{
                499: {
                  slidesPerView: 1,
                },
                999: {
                  slidesPerView: 1.4,
                },
              }}
              spaceBetween={20}
              className="w-full md:max-w-lg max-w-[250px]"
              onSlideChange={onSlideChange}
              onSwiper={(s) => {
                setSwiper(s);
              }}
            >
              {projects.map((project, i) => (
                <SwiperSlide
                  key={project.title}
                  className={cn(index - 1 !== i && "opacity-45", "")}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={350}
                    height={350}
                    className="object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex ml-6 mt-4 gap-x-4">
              <button onClick={prev} disabled={index === 1}>
                <Image
                  src={"/prev.png"}
                  alt={"prev"}
                  width={55}
                  height={55}
                  className={cn("cursor-pointer")}
                />
              </button>
              <button onClick={nexto} disabled={index === projects.length}>
                <Image
                  src={"/next.png"}
                  alt={"next"}
                  width={55}
                  height={55}
                  className={cn("cursor-pointer")}
                />
              </button>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
