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
        <p className="text-[#7cd6a6] text-xl neonText2">Smart Contract Developer </p>

        <h1 className="text-white text-2xl pt-10">About Me</h1>
        <p className="text-[#b1bac5] max-w-[1000px]">I started coding when I was 15 years old. <br/>
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
          <li>Javascript<b className="neonText"> - </b>Typescript</li>
          <li>Bootstrap<b className="neonText"> - </b>TailwindCSS</li>
          <li>Python</li>
          <li>Java</li>
          <li>MySQL</li>
          <li>Git<b className="neonText"> - </b>Github<b className="neonText"> - </b>Bitbucket</li>
        </ul>

        <h1 className="text-white text-2xl pt-10">My Working <b className="neonText2">XP</b></h1>
        <ul className="text-[#b1bac5] list-disc pl-5 py-2">
          <li>2020-2022:  E-Commerce Developer <span className="neonText">&#61;&#62;</span> <b className="text-white">Freelancer</b></li>
          <li>2021-Now:  Full-Stack Web Developer <span className="neonText">&#61;&#62;</span> <b className="text-white">Genesys Software</b></li>
          <li>2022-Now: Founder <span className="neonText">&#61;&#62;</span> <b className="text-white">Next Digital</b></li>
        </ul>

        <h1 className="text-white text-2xl pt-10">Newest Releases</h1>
        <ul className="text-[#b1bac5] list-disc pl-5 py-2">
          <li><a className="neonTextHover" href="http://www.genesyssoft.com.br/" target="_blank">Genesys Software</a></li>
          <li><a className="neonTextHover" href="https://www.cobarshop.com.br/" target="_blank">CobarShop</a></li>
        </ul>
        
        <h1 className="text-white text-2xl pt-10">Find Me At</h1>
        {/* <ul className="text-[#b1bac5] list-disc pl-5 py-2">
          <li><a target="_blank" href="https://github.com/DaviDemarqui" className="hover:text-white">Github.com</a></li>
          <li><a target="_blank" href="https://www.instagram.com/iamdaviddb/" className="hover:text-white">Instagram.com</a></li>
          <li><a target="_blank" href="https://br.linkedin.com/in/davi-demarqui-a875a2218?trk=people_directory" className="hover:text-white">linkedin.com</a></li>
          <li><a target="_blank" href="https://discordapp.com/users/481561932093063178" className="hover:text-white">Discord.com</a></li>
          <li><a target="_blank" href="https://open.spotify.com/user/31qzwpb6guuqza7kqtvpp2ir2eyi?si=53350b294ce24774" className="hover:text-white">Spotify.com</a></li>
        </ul> */}
        <ul className="max-w-md space-y-1 text-gray-500 list-inside flex">
          <li className="flex items-center m-1">
            <a className="neonTextHover" href="https://github.com/DaviDemarqui" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github pl-1" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
              </a>
          </li>
          <li className="flex items-center m-1">
            <a className="neonTextHover" href="https://twitter.com/DemarquiDavi" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-x" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
          </a>
          </li>
          <li className="flex items-center m-1">
            <a className="neonTextHover" href="https://br.linkedin.com/in/davi-demarqui-a875a2218?trk=people_directory" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
            </a>
          </li>
          <li className="flex items-center m-1">
            <a className="neonTextHover" href="https://discordapp.com/users/481561932093063178" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-discord" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
              <path d="M7 16.5c3.5 1 6.5 1 10 0" />
            </svg>
            </a>
          </li>
          <li className="flex items-center m-1">
            <a className="neonTextHover" href="https://open.spotify.com/user/31qzwpb6guuqza7kqtvpp2ir2eyi?si=fb3f22d6a06d447d" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-spotify" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
              <path d="M9 15c1.5 -1 4 -1 5 .5" />
              <path d="M7 9c2 -1 6 -2 10 .5" />
            </svg>
            </a>
          </li>
      </ul>
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
                <p className="mb-5 text-md max-sm:text-sm font-light ">{project.description}</p>
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
