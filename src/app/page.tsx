import Image from "next/image";

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
      description: "Web3 crowdfunding platform based on Kickstarter",
      imagePath: "/we-fund.gif",
      githubLink: "https://github.com/DaviDemarqui/we-fund"
    },
    {
      name: "SecureVote",
      description: "100% Decentralized Web3 voting method for the 2024 elections",
      imagePath: "/secure-vote.gif",
      githubLink: "https://github.com/DaviDemarqui/secure-vote"
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
<div className="flex h-screen nonInteractive">
      <div className="w-1/2 bg-black overflow-y-scroll p-5 lg:pr-28">

        <h1 className="text-white text-4xl text-bold">Hi, I&apos;m Davi D.Braga<span className="animate-blink ml-3">█</span></h1>
        <p className="text-green-500 text-xl">Smart Contract Developer </p>

        <h1 className="text-white text-2xl pt-10">About Me</h1>
        <p className="text-slate-200">I started coding when I was 15 years old. <br/>
          Coding became a passion for me, and since then, I&apos;ve never stopped creating new projects or getting involved in new ones.
          I&apos;ve worked on a wide range of projects, from open-source projects to applications used by thousands of people.
          I&apos;m always willing to improve, learn, and deliver while collaborating with teams in projects.
        </p>

        <h1 className="text-white text-2xl pt-10">Released Projects</h1>
        <ul className="text-white list-disc pl-5 py-2">
          <li>Kernel Network - Social Media platform</li>
          <li>WeFund - WEB3 Crowdfunding platform</li>
          <li>Genesys - Industrial ERP software</li>
          <li>CobarShop - E-Commerce Website</li>
          <li>Genesys Software - Company Website</li>
        </ul>

        <h1 className="text-white text-2xl pt-10">My Tech Stack</h1>
        <ul className="text-white list-disc pl-5 py-2">
          <li>Angular</li>
          <li>NextJS</li>
          <li>Hardhat</li>
          <li>Thirdweb.JS</li>
          <li>Solidity</li>
          <li>Javascript<b className="text-green-500">/</b>Typescript</li>
          <li>Bootstrap<b className="text-green-500">/</b>TailwindCSS</li>
          <li>Python</li>
          <li>Java</li>
          <li>MySQL</li>
          <li>Git<b className="text-green-500">/</b>Github<b className="text-green-500">/</b>Bitbucket</li>
        </ul>
        <h1 className="text-white text-2xl pt-10">My Working XP</h1>
        <ul className="text-white list-disc pl-5 py-2">
          <li>2021-Now:  Full-Stack Web Developer <b className="text-green-500">@GenesysSoftware</b></li>
          <li>2022-Now: Founder <b className="text-green-500">@NextDigital</b></li>
        </ul>
        <h1 className="text-white text-2xl pt-10">Find Me At</h1>
        <ul className="text-white list-disc pl-5 py-2">
          <li><a target="_blank" href="https://github.com/DaviDemarqui" className="text-slate-300 hover:underline">Github.com</a></li>
          <li><a target="_blank" href="https://www.instagram.com/iamdaviddb/" className="text-rose-400 hover:underline">Instagram.com</a></li>
          <li><a target="_blank" href="https://br.linkedin.com/in/davi-demarqui-a875a2218?trk=people_directory" className="text-blue-400 hover:underline">linkedin.com</a></li>
          <li><a target="_blank" href="https://discordapp.com/users/481561932093063178" className="text-purple-400 hover:underline">Discord</a></li>
        </ul>

        <div className="border border-white w-full mt-10"></div>

        <h1 className="text-white text-2xl pt-3">© Davi D.Braga {currentYear}</h1>

      </div>
      <div className="w-1/2 bg-black overflow-y-scroll">
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
                  <p className="text-green-500 mb-5 text-md max-sm:text-sm font-semibold">{project.description}</p>
                  <a href={project.githubLink} target="_blank" className="border border-white hover:bg-white hover:text-black py-2 lg:px-10 px-5 max-sm:px-2">See Repository</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
