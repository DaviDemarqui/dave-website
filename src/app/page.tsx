import Image from "next/image";

export default function Home() {
  const imageUrls = [
    "https://media1.giphy.com/media/tHjHlQXMktlhwuZJun/giphy.gif",
    "https://raw.githubusercontent.com/TotallyNotChase/glitch-this/master/example/glitched2.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNsQQE3dqz4TcvKrkjcKGlG2DpTXYtM_8mg&usqp=CAU",
    // Add more image URLs as needed
  ];
  return (
<div className="flex h-screen">
      <div className="w-1/2 bg-black overflow-y-scroll p-8">
      {/* <img src="https://i.gifer.com/S6YF.gif" alt="" className="my-10" /> */}
        {/* Content for the first section */}
        <h1 className="text-white text-4xl">Hi, I'm Davi Demarqui<span className="animate-blink ml-3">█</span></h1>
        <p className="text-green-500">Full Stack Software Developer </p>

        <h1 className="text-white text-2xl pt-10">WhoAmI?</h1>
        <p className="text-slate-200">Born in Brazil in 2003, I started coding with 16 years old. <br/>
        Since them I never stopped creating new projects or getting involved in new ones, I also started learning English with 9 years old and became fluent later
        I</p>

        <h1 className="text-white text-2xl pt-10">My TechStack</h1>
        <ul className="text-white list-disc pl-5 py-2">
          <li>Angular</li>
          <li>NextJS</li>
          <li>Python</li>
          <li>Java</li>
          <li>Javascript/Typescript</li>
          <li>Spring Boot</li>
          <li>MySQL</li>
        </ul>
        <h1 className="text-white text-2xl pt-10">My Working XP</h1>
        <ul className="text-white list-disc pl-5 py-2">
          <li>Freelancing - 2021/Now</li>
          <li>Genesys Software - 2021/Now</li>
        </ul>
        <h1 className="text-white text-2xl pt-10">Find Me At</h1>
        <ul className="text-white list-disc pl-5 py-2">
          <li>Github: <a href="https://github.com/DaviDemarqui" className="text-slate-300 hover:underline">github.com/DaviDemarqui</a></li>
          <li>Discord: <a href="https://github.com/DaviDemarqui" className="text-indigo-500 hover:underline">github.com/DaviDemarqui</a></li>
          <li>Twitter: <a href="https://twitter.com/DemarquiDavi" className="text-white hover:underline">twitter.com/DemarquiDavi</a></li>
          <li>Instagram: <a href="https://www.instagram.com/iamdaviddb/" className="text-rose-500 hover:underline">instagram.com/iamdaviddb</a></li>
          <li>Linkedin: <a href="https://br.linkedin.com/in/davi-demarqui-a875a2218?trk=people_directory" className="text-blue-500 hover:underline">linkedin.com/in/davi-demarqui</a></li>


        </ul>
      </div>
      <div className="w-1/2 bg-black overflow-y-scroll">
        {/* Content for the second section */}
        <h1 className="text-white text-4xl p-8">Projects</h1>
        {/* Container for the list of images with scrolling */}
        <div className="h-full">
          {/* Render the list of images */}
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Image ${index + 1}`}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
