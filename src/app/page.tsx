"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { BsGithub, BsEnvelope, BsLinkedin } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const [width, setWidth] = useState(1000);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    setWidth(window.innerWidth);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="w-full bg-zinc-950 scroll-smooth h-screen">
      <nav className="w-full sticky top-0 flex items-start justify-evenly bg-gradient-to-b from-blue-950 to-transparent" style={{ height: '10%' }}>
        <a href="#projects">
          <p className="text-gray-100 text-2xl font-sans py-4">Projects</p>
        </a>
        <a href="#skills">
          <p className="text-gray-100 text-2xl font-sans py-4">Skills</p>
        </a>
        <a href="#contact">
          <p className="text-gray-100 text-2xl font-sans py-4">Contact</p>
        </a>
      </nav>
      <div className="w-full flex items-center justify-center flex-col h-5/6">
        <h1 className="text-gray-100 text-5xl font-sans font-semibold">Andrew Wladis</h1>
        <h2 className="text-gray-100 text-4xl font-sans">Software Developer</h2>
      </div>
      <div id="projects" className="w-full bg-gradient-to-b from-zinc-950 to-blue-950 flex flex-col" style={{ paddingTop: 70 }}>
        <h1 className="text-gray-100 text-3xl font-sans text-center py-2 ">Some of my more recent projects...</h1>
        <div className='flex flex-wrap justify-evenly'>
          {[
            {
              name: "Music Box'd",
              link: "https://apps.apple.com/app/id6476071299",
              description: "Discover and share your favorite albums with Music Boxd!"
            },
            {
              name: "Swiftie Swipe",
              link: "https://apps.apple.com/us/app/swiftie-swipe/id6479224086",
              description: "The ultimate unoffical daily Swiftie challenge game!"
            },
            {
              name: "Dunk Rank",
              link: "https://apps.apple.com/us/app/dunk-rank/id6448699695",
              description: "Dunk Rank is the premiere app for ranking you and your friends based off basketball 1v1 scores."
            },
            {
              name: "Quote Cook",
              link: "https://apps.apple.com/us/app/quote-cook/id6447148619",
              description: "In this competitive daily unofficial Breaking Bad game you can compete in daily quote trivia and share your results with your friends."
            },
            {
              name: "EKSE",
              link: "https://apps.apple.com/us/app/ekse/id6450754813",
              description: "Challenge your skills, reflexes, and endurance in this addictive arcade adventure: EKSE."
            },
            {
              name: "515",
              link: "https://515game.netlify.app/",
              description: "515 is a Breaking Bad-themed clone of 2048, where players combine elements blocks to create an empire."
            }].map((item) => (
              <>
                {(width < 730 && item.name === "") ? (
                  null
                ) : (
                  <div
                    className="flex flex-row items-center justify-center bg-gradient-to-bl from-indigo-900 to-teal-950 p-1 mx-1 my-2 rounded-xl shadow-md duration-300 ease-in-out hover:shadow-2xl"
                    style={{
                      minWidth: 315
                    }}
                    key={item.name.replace(/\s/g, "").toLowerCase()}
                  >
                    <Image
                        src={`/${item.name.replace(/\s/g, "").toLowerCase()}.png`}
                        width={135}
                        height={300}
                        alt={item.name}
                        style={{
                          minWidth: 135,
                          minHeight: 300
                        }}
                        className='object-contain mr-3 ml-2'
                      />
                    <div className='flex flex-col justify-center h-full'>
                      <p className="text-gray-200 text-2xl font-sans text-left font-medium">{item.name}</p>
                      <p className="text-gray-200 text-m font-sans text-left w-40">{item.description}</p>
                      <button className="border-2 border-sky-600 text-gray-100 font-sans text-m p-1 rounded-lg mt-2 duration-300 ease-in-out  hover:bg-sky-900">
                        <a className="text-white text-l font-sans text-left py-2" href={item.link} target="_blank">View Project</a>
                      </button>
                    </div>
                  </div>
                )}
              </>
            ))}
        </div>
      </div>
      <div id="skills" className="w-full bg-gradient-to-b from-blue-950 to-zinc-950 flex flex-col h-fit">
        <h1 className="text-gray-100 text-4xl font-sans text-center p-5">My Skills</h1>
        <div className="w-full flex flex-wrap flex-row justify-center">
          {/* add java */}
          {['html', 'css', 'js', 'ts', 'node', 'react', 'python', 'cpp', 'java', 'torch', 'git',  'firebase', 'mongodb', 'photoshop', 'xd', 'illustrater'].map((item) => (
            <div className='m-5 h-fit w-fit' style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <Image
                src={`/skills/${item}.jpg`}
                width={110}
                height={110}
                alt={item}
                key={item}
              />
            </div>
          ))}
        </div>
      </div>
      <div id="contact" className="w-full bg-zinc-950 h-1/6 flex flex-col pt-2">
        <h1 className="text-gray-100 text-4xl font-sans text-center">Contact</h1>
        <div className="w-full bg-zinc-950 flex flex-row justify-center items-end">
          <a href="https://github.com/AndrewWladis/" className='p-4' target="blank">
            <BsGithub color='white' size={50} />
          </a>
          <a href="https://www.linkedin.com/in/andrew-wladis-720070331/" className='p-4' target="blank">
            <BsLinkedin color='white' size={50} />
          </a>
          <a href="mailto:andrewwladis@gmail.com" className='p-4'>
            <BsEnvelope color='white' size={50} />
          </a>
        </div>
      </div>
    </main>
  )
}
