import Image from "next/image";

export default function Home() {
  const imageUrls = [
    "https://media1.giphy.com/media/tHjHlQXMktlhwuZJun/giphy.gif",
    "https://i.pinimg.com/originals/46/31/2b/46312b0df5d9b8f9bd6ad946574a0a81.gif",
    "https://i.redd.it/hs9dqj9nbpqb1.gif",
    "https://i.gifer.com/embedded/download/FIQD.gif",
    // Add more image URLs as needed
  ];

  const gifFilenames = [
    "/kernel.gif",
    "/we-fund.gif",
    // Add more filenames as needed
  ];
  return (
<div className="flex h-screen nonInteractive">
      <div className="w-1/2 bg-black overflow-y-scroll p-8">
        <Image
          src="/MOSHED-DAVE.gif"
          width={200}
          height={400} // Path to the GIF in the public directory
          alt="MOSHED-DAVE-1 GIF"
          className="my-10 rounded-b-full"
          style={{ pointerEvents: 'none' }}
        />      
        {/* Content for the first section */}
        <h1 className="text-white text-4xl">Hi, I'm Davi D.Braga<span className="animate-blink ml-3">█</span></h1>
        <p className="text-green-500">Full-Stack Software Developer </p>

        <h1 className="text-white text-2xl pt-10">About Me</h1>
        <p className="text-slate-200">I started coding when I was 15 years old. <br/>
          Coding became a passion for me and since them I never stopped creating new projects or getting involved
          in new ones, everything I know was self-taught or teached by work experience. 
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
      </div>
      <div className="w-1/2 bg-black overflow-y-scroll">
        {/* Content for the second section */}
        <h1 className="text-white text-2xl p-8">~/see/my/projects$<span className="animate-blink ml-3">█</span></h1>
        {/* Container for the list of images with scrolling */}
        <div className="h-full">
          {/* Render the list of images */}
          {imageUrls.map((filename, index) => (
            <Image
              key={index}
              src={filename} // Dynamic path to the local GIF file
              alt={`Image ${index + 1}`}
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
              unoptimized={filename.endsWith('.gif')}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
