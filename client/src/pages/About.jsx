import aboutImg from "../assets/images/about_img.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] max-w-2xl rounded-xl shadow-xl p-3 flex flex-col gap-3">
        <h1 className="text-4xl text-center font-semibold">About</h1>
        <div className="w-max flex flex-col">
          <img src={aboutImg} className="w-40 h-40" alt="Image" />
          <h1 className="text-xl font-semibold text-center">Vikas Sharma</h1>
        </div>
        <ul className="list-disc w-max mx-5">
          <li className="hover:underline hover:text-blue-600 cursor-pointer">
            <a
              className="flex items-center gap-2"
              href="https://github.com/vikas01988"
              target="_blank"
            >
              Git-Hub <FaExternalLinkAlt />
            </a>
          </li>
          <li className="hover:underline hover:text-blue-600 cursor-pointer">
            <a
              className="flex items-center gap-2"
              href="https://www.linkedin.com/in/vikas-sharma-4914802bb/"
              target="_blank"
            >
              LinkedIn <FaExternalLinkAlt />
            </a>
          </li>
        </ul>
        <p>
         I'm Vikas Sharma, a Computer Science student and full-stack developer with
  a strong interest in MERN Stack development, Data Science, and Artificial
  Intelligence. I enjoy turning ideas into scalable applications and solving
  real-world problems through technology. My focus is on continuous learning,
  building impactful projects, and growing as a software engineer.
        </p>
      </div>
    </div>
  );
};

export default About;
