'use client'
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/Cardhover'
import { SiReact ,SiNextdotjs,SiTailwindcss,SiJavascript ,SiMongodb,SiExpress} from "react-icons/si";

export default function Skills() {
const skills = [
    {
        text:"React.js",
        Icon:SiReact,
    },
    {
        text:"Next.js",
        Icon:SiNextdotjs ,
    },
    {
        text:"Tailwind",
        Icon:SiTailwindcss ,
    },
    {
        text:"Javascript",
        Icon:SiJavascript ,
    },
    {
        text:"MongoDB",
        Icon:SiMongodb ,
    },
    {
      text:"express.js",
      Icon:SiExpress,
  },


]


  return (
    <div className='max-w-5x mx-auto px-8 '>
      <Title text="Skills 🥷" className='flex flex-col items-center justify-center -rotate-6'/>
      <HoverEffect className='mt-10' items={skills}/>
    </div>
  )
}
