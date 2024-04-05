"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const projects = [
    {
      name: "Kernel Network",
      description: "Social Media Platform",
      imagePath: "/kernel.gif",
      githubLink: "https://github.com/DaviDemarqui/kernel-network"
    },
    {
      name: "WeFund",
      description: "Web3 crowdfunding platform",
      imagePath: "/we-fund.gif",
      githubLink: "https://github.com/DaviDemarqui/we-fund"
    },
    {
      name: "SecureVote",
      description: "Web3 voting application for the 2024 US elections",
      imagePath: "/secure-vote.gif",
      githubLink: "https://github.com/DaviDemarqui/secure-vote"
    },
  ];

  const currentYear = new Date().getFullYear();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
<div className="flex h-screen nonInteractive">
      <div className={`w-1/2 bg-black overflow-y-scroll p-5 lg:pr-28 ${isOpen ? 'hidden lg:block' : 'w-full'}`}>

        <h1 className="text-white text-4xl text-bold">Hi, I&apos;m Davi Demarqui<span className="animate-blink ml-3">█</span></h1>
        <p className="text-[#7cd6a6] text-xl ">Smart Contract Developer </p>

        <h1 className="text-white text-2xl pt-10">About Me</h1>
        <p className="text-[#b1bac5] max-w-[1500px]">I started coding when I was 15 years old. <br/>
          Coding became a passion for me, and since then, I&apos;ve never stopped creating new projects or getting involved in new ones.
          I&apos;ve worked on a wide range of projects, from open-source projects to applications used by thousands of people.
          I&apos;m always willing to improve, learn, and deliver while collaborating with teams in projects.
        </p>

        <h1 className="text-white text-2xl pt-10">My Tech Stack</h1>
        <ul className="text-[#b1bac5] list-disc pl-5 py-2">
          <li>Angular</li>
          <li>NextJS</li>
          <li>Foundry</li>
          <li>Hardhat</li>
          <li>Thirdweb.JS</li>
          <li>Solidity</li>
          <li>Javascript<b className="neonText">  /  </b>Typescript</li>
          <li>Bootstrap<b className="neonText">  /  </b>TailwindCSS</li>
          <li>Python</li>
          <li>Java</li>
          <li>MySQL</li>
          <li>Git<b className="neonText">  /  </b>Github<b className="neonText">  /  </b>Bitbucket</li>
        </ul>
        <h1 className="text-white text-2xl pt-10">My Working XP</h1>
        <ul className="text-[#b1bac5] list-disc pl-5 py-2">
          <li>2021-Now:  Full-Stack Web Developer <span className="neonText"> =></span> <b className="text-white">Genesys Software</b></li>
          <li>2022-Now: Founder <span className="neonText">=></span> <b className="text-white">Next Digital</b></li>
        </ul>
        <h1 className="text-white text-2xl pt-10">Find Me At</h1>
        <ul className="text-[#b1bac5] list-disc pl-5 py-2">
          <li><a target="_blank" href="https://github.com/DaviDemarqui" className="hover:text-white">Github.com</a></li>
          <li><a target="_blank" href="https://www.instagram.com/iamdaviddb/" className="hover:text-white">Instagram.com</a></li>
          <li><a target="_blank" href="https://br.linkedin.com/in/davi-demarqui-a875a2218?trk=people_directory" className="hover:text-white">linkedin.com</a></li>
          <li><a target="_blank" href="https://discordapp.com/users/481561932093063178" className="hover:text-white">Discord.com</a></li>
        </ul>

        <div className="border-[1px] border-slate-500 w-full mt-10"></div>

        <h1 className="text-white text-2xl pt-3">© Davi Demarqui {currentYear}</h1>

      </div>
      {/* I WANT THIS DIV TO BE CLOSABLE */}
      <div className={`w-1/2 bg-black overflow-y-scroll ${isOpen ? 'max-[1024px]:w-full' : 'hidden'}`}>
        {/* Content for the second section */}
        <h1 className="text-white lg:text-2xl text-md p-8 max-sm:p-0">~/see/my/projects<span className="animate-blink ml-2">█</span></h1>
        {/* Container for the list of images with scrolling */}
        <div className="h-full">
          {/* Render the list of images */}
          {projects.map((project, index) => (
            <div key={index} className="relative w-full p-0 max-sm:py-6">
              <Image
                src={project.imagePath} // Dynamic path to the local GIF file
                alt={`Image ${index + 1}`}
                width={100} // Adjust width as needed
                height={500} // Adjust height as needed
                unoptimized={project.imagePath.endsWith('.gif')}
                className="w-full max-sm:h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-65">
                <div className="text-white text-center max-sm:text-lg">
                  <h1 className="lg:text-3xl">{project.name}</h1>
                  <p className="text-[#b1bac5] mb-5 text-md max-sm:text-sm font-light ">{project.description}</p>
                  <button id="projects-toggle"><a href={project.githubLink} target="_blank" >See Repository</a></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={toggle} id="projects-toggle" className="fixed bottom-4 right-10 px-3 py-1 rounded-md shadow-lg">
        {isOpen ? 'Close' : 'Projects'}
        {/* <img src={isOpen ? './close.png' : './block.png'}  alt="block pixel" srcSet="Created by Arthur Shlain from Noun Project" /> */}
      </button>
    </div>
  );
}
