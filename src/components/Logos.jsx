import { FaAws, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaPython, FaDatabase, FaGit, FaGithub, FaNodeJs } from "react-icons/fa";

function Logos() {
  const tools = [
    { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
    { name: "AWS", icon: <FaAws className="text-amber-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "SQL", icon: <FaDatabase className="text-orange-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Git", icon: <FaGit className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
    { name: "AWS", icon: <FaAws className="text-amber-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "SQL", icon: <FaDatabase className="text-orange-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Git", icon: <FaGit className="text-red-500" /> },
  ];

  return (
    <div className="bg-blue-30" id="logo">
      <div className="justify-center text-center items-center">
        <h1 data-aos="fade-down"  className="font-semibold text-2xl lg:text-3xl   mt-5 text-[#0057D3]">
          Our Technologies
        </h1>
        {/* <div className="p-4">
          <h4 className="font-normal text-base text-gray-600 text-center">
            Mastering tech, Boosting careers, Adapting to digital change
          </h4>
        </div> */}
      </div>

      <div   className="w-full overflow-hidden py-5 pb-5">
        <div className="flex w-max animate-marquee lg:space-x-20 space-x-12">
          {[...tools, ...tools].map((tool, index) => (
            <div key={index} className="text-5xl pt-3 mb-5  transition-transform hover:scale-110">
              {tool.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logos;