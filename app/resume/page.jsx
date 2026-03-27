"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I’m a passionate web developer who loves creating modern, efficient, and visually appealing web applications. I’m always learning and improving my skills, with a strong interest in solving real-world problems through technology and building products that make an impact.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jawad Adekanbi",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 915 228 0668",
    },
    {
      fieldName: "Experience",
      fieldValue: "1.5 Years",
    },
    {
      fieldName: "Nationaility",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "adekanbija1@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Yoruba",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "I am a certified web developer with hands-on experience building responsive and scalable web applications. I have worked on real-world projects, focusing on frontend development with React and Next.js, as well as backend integration using Node.js. I enjoy turning ideas into functional, user-friendly digital products.",
  items: [
    {
      comapny: "Tech Freelancing",
      position: "Full Stack Dveloper",
      duration: "2022 - Present",
    },
    {
      comapny: "Tech Freelancing",
      position: "Full Stack Dveloper",
      duration: "2022 - Present",
    },
    {
      comapny: "Tech Freelancing",
      position: "Full Stack Dveloper",
      duration: "2022 - Present",
    },
    {
      comapny: "Tech Freelancing",
      position: "Full Stack Dveloper",
      duration: "2022 - Present",
    },
    {
      comapny: "Tech Freelancing",
      position: "Full Stack Dveloper",
      duration: "2022 - Present",
    },
    {
      comapny: "Tech Freelancing",
      position: "Full Stack Dveloper",
      duration: "2022 - Present",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "I studied Web Development at SQI College of ICT, where I gained a solid foundation in programming, web technologies, and software development practices. My training equipped me with the skills to build full-stack applications and work effectively on real-world projects.",
  items: [
    {
      institution: "SQI College of ICT",
      degree: "National Diploma",
      duration: "2022 - 2024",
    },
  ],
};
const skills = {
  title: "My skills",
  description:
    "I build modern, responsive web applications using React, Next.js, Tailwind CSS, and Node.js, with a focus on performance and clean code.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "nextjs",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full ">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className=" text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
              </div>
              <ScrollArea className=" h-[400px] mt-3">
                <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 text-[17px]"
                      >
                        <span className="text-accent *:">{item.duration}</span>
                        <h3 className="text-xl max-w[260px] min-h-[60px] ">
                          {item.position}
                        </h3>
                        <div className=" flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.comapny}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <ScrollBar />
                {/* <ScrollAreaPrimitive.Corner /> */}
              </ScrollArea>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className=" text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
              </div>
              <ScrollArea className=" h-[400px] mt-3 ">
                <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 text-[17px]"
                      >
                        <span className="text-accent *:">{item.duration}</span>
                        <h3 className="text-xl max-w[260px] min-h-[60px] ">
                          {item.degree}
                        </h3>
                        <div className=" flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <ScrollBar />
                {/* <ScrollAreaPrimitive.Corner /> */}
              </ScrollArea>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-cente xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 xl:grid-cols-3 md:grid-cols-4 gap-4  xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index} className="">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl-3">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
