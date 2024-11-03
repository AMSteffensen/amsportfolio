import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <div className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-columns-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Hi there! I'm a passionate frontend developer with a knack for
            creating dynamic and user-friendly web applications. With a strong
            foundation in React, JavaScript, and TypeScript, I enjoy
            transforming complex ideas into seamless digital experiences. I
            thrive in environments where I can continuously learn and grow.
            Whether it's building microfrontends, automating workflows with bash
            scripting, or optimizing CI/CD pipelines, I love diving into
            challenges that push my technical boundaries. My experience extends
            beyond frontend development, with hands-on skills in Node.js,
            Express, and even Python for data analysis. Beyond coding, I have a
            keen eye for design, often collaborating closely with designers to
            ensure every project is both functional and aesthetically pleasing.
            I'm always excited to contribute to innovative projects that make a
            difference.
          </p>
        </article>
      </div>
    </div>
  );
};
export default About;
