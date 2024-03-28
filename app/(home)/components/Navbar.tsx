
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Navbar({ className }: { className: string }) {
  const socials = [
    {
      link: 'https://www.linkedin.com/in/shubham-kanaskar-237280157/',
      label: 'LinkedIn',
      Icon: FaLinkedin,
    },
    {
      link: 'https://github.com/Shubhamkanskar',
      label: 'GitHub',
      Icon: FaGithub,
    },
    {
      link: 'https://twitter.com/Shubham0139518',
      label: 'Twitter(X)',
      Icon: FaTwitter,
    },
  ];

  return (

    <nav className={cn('py-10 flex justify-between items-center', className)}>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Shubham Kanaskar 🧑‍💼</h1>
      <div className='flex items-center gap-5'>
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className='w-5 h-5 hover:scale-125 transition-all cursor-pointer' />
            </Link>
          );
        })}
      </div>
    </nav>

  );
}
