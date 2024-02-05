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
  ];

  const currentYear = new Date().getFullYear();

  return (
<div className="flex h-screen nonInteractive">
      <div className="w-1/2 bg-black overflow-y-scroll p-5 lg:pr-28">
        <Image
          src="/MOSHED-DAVE.gif"
          width={200}
          height={400}
          alt="MOSHED-DAVE-1 GIF"
          className="my-10 rounded-b-full"
          style={{ pointerEvents: 'none' }}
        />      

        <h1 className="text-white text-4xl">Hi, I&apos;m Davi D.Braga<span className="animate-blink ml-3">█</span></h1>
        <p className="text-green-500">Full-Stack Software Developer </p>

        <h1 className="text-white text-2xl pt-10">About Me</h1>
        <p className="text-slate-200">I started coding when I was 15 years old. <br/>
          Coding became a passion for me, and since then, I have never stopped creating new projects or getting involved in new ones.
          I&apos;ve worked on a wide range of projects, from open-source projects to applications used by thousands of people.
          Today I am immensely happy to be working with what was once a hobby for me and to be in teams full of incredible people
        </p>

        <h1 className="text-white text-2xl pt-10">Released Projects</h1>
        <ul className="text-white list-disc pl-5 py-2">
          <li>Kernel Network - Social Media platform</li>
          <li>Genesys - Industrial ERP software</li>
          <li>WeFund - WEB3 Crowdfunding platform</li>
          <li>CobarShop - E-COMMERCE website</li>
          <li>Genesys Software - Business Website</li>
        </ul>

        <h1 className="text-white text-2xl pt-10">My Tech Stack</h1>
        <ul className="text-white list-disc pl-5 py-2">
          <li>Angular</li>
          <li>NextJS</li>
          <li>Thirdweb.JS</li>
          <li>Javascript<b className="text-green-500">/</b>Typescript</li>
          <li>Bootstrap<b className="text-green-500">/</b>TailwindCSS</li>
          <li>Git</li>
          <li>Python</li>
          <li>Java</li>
          <li>SpringBoot</li>
          <li>MySQL</li>
        </ul>
        <h1 className="text-white text-2xl pt-10">My Working XP</h1>
        <ul className="text-white list-disc pl-5 py-2">
          <li>2020-Now: <b className="text-green-500">Freelancing</b></li>
          <li>2021-Now:  Web Developer <b className="text-green-500">@GenesysSoftware</b></li>
          <li>2022-Now: Founder <b className="text-green-500">@NextDigital</b></li>
        </ul>
        <h1 className="text-white text-2xl pt-10">Find Me At</h1>
        <ul className="text-white list-disc pl-5 py-2">
          <li>Github: <a target="_blank" href="https://github.com/DaviDemarqui" className="text-green-500 hover:underline">github.com/DaviDemarqui</a></li>
          <li>Twitter: <a target="_blank" href="https://twitter.com/DemarquiDavi" className="text-slate-200 hover:underline">twitter.com/DemarquiDavi</a></li>
          <li>Instagram: <a target="_blank" href="https://www.instagram.com/iamdaviddb/" className="text-rose-500 hover:underline">instagram.com/iamdaviddb</a></li>
          <li>Linkedin: <a target="_blank" href="https://br.linkedin.com/in/davi-demarqui-a875a2218?trk=people_directory" className="text-blue-500 hover:underline">linkedin.com/in/davi-demarqui</a></li>
          <li>Discord: <a target="_blank" href="https://discordapp.com/users/481561932093063178" className="text-indigo-500 hover:underline">discordapp.com/users/481561932093063178</a></li>
        </ul>

        <div className="border border-white w-full mt-10"></div>

        <h1 className="text-white text-2xl pt-3">© Davi D.Braga {currentYear}</h1>

      </div>
      <div className="w-1/2 bg-black overflow-y-scroll">
        {/* Content for the second section */}
        <h1 className="text-white lg:text-2xl text-md p-8">~/see/my/projects<span className="animate-blink ml-2">█</span></h1>
        {/* Container for the list of images with scrolling */}
        <div className="h-full">
          {/* Render the list of images */}
          {projects.map((project, index) => (
            <div key={index} className="relative w-full">
              <Image
                src={project.imagePath} // Dynamic path to the local GIF file
                alt={`Image ${index + 1}`}
                width={100} // Adjust width as needed
                height={100} // Adjust height as needed
                unoptimized={project.imagePath.endsWith('.gif')}
                className="w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-white text-center">
                  <h1 className="lg:text-3xl">{project.name}</h1>
                  <p className="text-green-500 mb-5 text-sm">{project.description}</p>
                  <a href={project.githubLink} target="_blank" className="border border-white hover:bg-white hover:text-black py-2 lg:px-10 px-5">See Repository</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
