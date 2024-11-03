import { nanoid } from "nanoid";
import {
  FaReact,
  FaCloud,
  FaJs,
  FaFigma,
  FaTools,
  FaTachometerAlt,
  FaPalette,
} from "react-icons/fa";
import { SiMicrogenetics, SiNx } from "react-icons/si";

export const skills = [
  {
    id: nanoid(),
    title: "React Development",
    icon: <FaReact className="h-16 w-16 text-blue-500" />,
    text: "Expert in building dynamic and responsive single-page applications (SPAs) using React, focusing on component-based architecture and reusable code.",
  },
  {
    id: nanoid(),
    title: "JavaScript & TypeScript",
    icon: <FaJs className="h-16 w-16 text-yellow-500" />,
    text: "Strong command of JavaScript (ES6+) and TypeScript for building robust and maintainable web applications with enhanced type safety.",
  },
  {
    id: nanoid(),
    title: "Microfrontends Architecture",
    icon: <SiMicrogenetics className="h-16 w-16 text-blue-500" />,
    text: "Proficient in designing and implementing microfrontend architectures to enable scalable, maintainable, and independent deployment of frontend applications.",
  },
  {
    id: nanoid(),
    title: "Cloud Services & Deployment",
    icon: <FaCloud className="h-16 w-16 text-purple-500" />,
    text: "Experienced in deploying and managing applications on cloud platforms like AWS, Azure, and Netlify, ensuring high availability and scalability.",
  },
  {
    id: nanoid(),
    title: "Performance Optimization",
    icon: <FaTachometerAlt className="h-16 w-16 text-green-500" />,
    text: "Focused on optimizing web performance by using techniques like code splitting, lazy loading, and minimizing render-blocking resources.",
  },
  {
    id: nanoid(),
    title: "UI/UX Design Integration",
    icon: <FaFigma className="h-16 w-16 text-pink-500" />,
    text: "Collaborative experience in working with design tools like Figma to translate design systems into pixel-perfect, responsive UIs.",
  },
  {
    id: nanoid(),
    title: "Design Systems & Component Libraries",
    icon: <FaPalette className="h-16 w-16 text-teal-500" />,
    text: "Knowledgeable in developing and utilizing design systems and component libraries such as Material-UI, Tailwind CSS, and Storybook for consistent UI/UX.",
  },
  {
    id: nanoid(),
    title: "Frontend Tooling & Build Systems",
    icon: <FaTools className="h-16 w-16 text-gray-500" />,
    text: "Proficient in configuring and optimizing build tools like Webpack, Vite, and Babel to streamline the development workflow and improve performance.",
  },
];
