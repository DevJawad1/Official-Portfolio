"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 915 228 0668",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "youremail@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Oke-ado Akuro Street, Ibadan",
  },
]


import { motion } from "framer-motion"
const Contact = () => {
  return (  
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"

    >
      <div className="container mx-auto">
        {/* form div */}
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none  ">
            <form className="flex flex-col gap-6 xl:p-10 p-5 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>  
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ea dicta accusantium.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="[hone" placeholder="Phone number" />
              </div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service"/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                <SelectItem value="Web Development">Web Developement</SelectItem>
                <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                <SelectItem value="Logo Design">Logo Design</SelectItem>
                {/* <SelectItem>Web Developement</SelectItem> */}
              </SelectGroup>
            </SelectContent>

            <Textarea className="h-[200px]" placeholder="Type your message here" />

            <Button size="md" className="max-w-40">Send message</Button>
          </Select>
            </form> 
          </div>

          <div className=" flex-1 flex items-center order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=>{
                return (
                  <li key={index}>
                    <div className="w-[52px] h-[52px]  bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[20px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 pt-2">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>


        </div>
      </div>
    </motion.section>
  )
}

export default Contact