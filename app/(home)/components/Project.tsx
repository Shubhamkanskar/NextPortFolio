'use client'
import React from 'react';
import { SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/DirectionImageHover';

export default function Project() {
  const projects = [
    {
      title: 'Doctor Appointment Booking',
      tech: [SiReact, SiTailwindcss, SiNextdotjs],
      link: 'localhost/3000 ',
      cover: "/project2.png",
      background: 'bg-indigo-500'
    },
    {
      title: ' weether WebSite',
      tech: [SiReact, SiTailwindcss, SiNextdotjs],
      link: 'localhost/3000',
      cover: "/weather app.png",
      background: 'bg-green-500'
    },
    {
      title: ' Job Portal WebSite',
      tech: [SiReact, SiTailwindcss, SiNextdotjs],
      link: 'localhost/3000',
      cover: "/imgJopport.png",
      background: 'bg-red-500'
    },
    {
      title: ' my WebSite',
      tech: [SiReact, SiTailwindcss, SiNextdotjs],
      link: 'localhost/3000',
      cover: "/project1.png",
      background: 'bg-gray-500'
    },
  ];

  return (
    <div>
      <div className="py-10 p-5 sm:p-0">
        <Title text="Projects 🚀" className="flex flex-col items-center justify-center rotate-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 p-20 gap-5">
          {projects.map((project, index) => {
            return (
              <Link href={project.link} key={index}>
                <div className={cn('p-5 rounded-md space-y-5 mb-10 gap-3', project.background)}>
                  <DirectionAwareHover
                    imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                    <div className='space-y-5'>
                      <h1 className='text-2xl font-bold '>{project.title}</h1>
                      <div className='flex items-center gap-5 '>
                        {project.tech.map((Icon, index) => {
                          const TechIcon = Icon;
                          return <TechIcon key={index} className="w-8 h-8" />;
                        })}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
