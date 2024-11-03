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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            cupiditate aspernatur totam culpa minima perferendis laborum
            mollitia, aperiam tempora quas, facilis odio a, nisi recusandae. a
          </p>
        </article>
      </div>
    </div>
  );
};
export default About;
