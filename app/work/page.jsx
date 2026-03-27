"use client";

import { motion } from "framer-motion";
import React, { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";

import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project 1",
    description:
      "I built a modern, responsive furniture website that highlights a variety of home and office products. The site features a clean, user-friendly design, smooth navigation to help users browse and explore products easily across all devices.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/project/furniture.png",
    live: "https://cdsfurniure.netlify.app/",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Project 2",
    description:
      "An interactive photo editor that lets users adjust brightness, apply filters, rotate images, and save their edits with a clean, responsive interface.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/project/Photo lab.png",
    live: "https://jwdphlab.netlify.app",
    github: "https://github.com/DevJawad1/phOTOAPP",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Project 3",
    description:
      "I developed a web-based Computer-Based Testing System (CBTS) where tutors can create and manage exams, and students can take them online. The platform features a clean, responsive interface that makes exam creation, scheduling, and grading simple for tutors, while providing students with a smooth and intuitive test-taking experience",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/project/cbt webapp.png",
    live: "https://gomalcbts.vercel.app",
    github: "",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Project 4",
    description:
      "I developed a full-featured e-commerce platform where users can browse products, add items to their cart, and make purchases and also sell any product of their choice with a feelng of being in a physical market place. The site features a clean, responsive design with smooth navigation, product filtering, and comprehensive product searching",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/project/imarkt.png",
    live: "https://imarket-blond.vercel.app",
    github: "https://github.com/DevJawad1/imarket",
  },
  {
    num: "05",
    category: "Fullstack",
    title: "Project 5",
    description:
      "I built a responsive investment management platform where users can view their dashboard, track investment plans, monitor wallet activity, and access investment tools.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/project/investment app.png",
    live: "https://fundinvc-website.vercel.app/register",
    github: "https://github.com/DevJawad1/invc-website",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const swiperRef = useRef(null);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    console.log(currentIndex);
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4 ">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=" w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=" w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[400px] mb-5"
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className=" h-[250px] xl:h-[400px] relative group flex justify-center items-center bg-pink-50/20  ">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-corver"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <WorkSliderBtns
              swiperRef={swiperRef}
              contaninerStyles="flex gap-2 justify-between xl:justify-end"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
