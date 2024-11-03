import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-red-100 via-red-200 to-red-300 py-16 sm:py-24">
      <div className="align-element sm:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <article className="relative z-10 text-left md:pl-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-none">
            <span className="block">
              <span className="block">
                I<span className="text-red-500">AM</span>
              </span>
            </span>

            <span className="block text-black-500 text-3xl">
              <Typewriter
                words={[
                  "Front-End Developer",
                  "Front-End Designer",
                  "Front-End Engineer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <div className="flex justify-start mt-4 sm:mt-6 space-x-4">
            <a
              href="https://github.com/amsteffensen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithubSquare className="text-3xl sm:text-4xl text-gray-800 hover:text-black transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/amsteffensen/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-3xl sm:text-4xl text-blue-600 hover:text-blue-800 transition-colors" />
            </a>
            <a
              href="https://instagram.com/amsteffensen89"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagramSquare className="text-3xl sm:text-4xl text-red-400 hover:text-blue-600 transition-colors" />
            </a>
          </div>
          <a
            href="#projects"
            className="mt-6 sm:mt-8 inline-block bg-red-500 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-red-600 transition"
          >
            View My Work
          </a>
        </article>
        <article className="absolute right-0  md:relative md:top-auto md:left-auto md:mx-auto  md:w-full opacity-25 md:opacity-100">
          <img
            src={heroImg}
            alt="Hero Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
