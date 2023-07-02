import {
  SiMui,
  SiPostgresql,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";

import { AiFillApi } from "react-icons/ai";


export const Experience = () => {
  return (
    <section
      id="experience"
      className="h-full sm:h-full md:h-screen w-full lg:mt-96 xl:mt-40 flex flex-col items-center"
    >
      <h5>What Skills I Have</h5>
      <h2 className="text-primary text-3xl">My Experience</h2>

      <div
        className="
        container grid  grid-cols-1 
        gap-8 mt-8
        w-2/3
        sm:grid-cols-1 sm:w-2/3
        lg:grid-cols-1 lg:w-4/5
        xl:grid-cols-2 xl:w-full
        "
      >
        <div
          className="
          content_experience
          "
        >
          <h3 className="text-center mb-8 text-primary text-xl">
            Frontend React Development
          </h3>
          <div
            className="
              grid grid-cols-0 gap-2
              sm:grid-cols-2 sm:place-self-auto
              md:grid-cols-2 
              lg:grid-cols-2
            "
          >
            <article className="experience_details">
              <SiJavascript className="text-4xl text-primary" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-primary-ligth">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiReact className="text-4xl text-primary" />
              <div>
                <h4>React</h4>
                <small className="text-primary-ligth">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiRedux className="text-4xl text-primary" />
              <div>
                <h4>Redux Toolkit</h4>
                <small className="text-primary-ligth">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiTailwindcss className="text-4xl text-primary" />
              <div>
                <h4>Tailwindcss</h4>
                <small className="text-primary-ligth">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiTypescript className="text-4xl text-primary" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-primary-ligth">intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <SiMui className="text-4xl text-primary" />
              <div>
                <h4>Material UI</h4>
                <small className="text-primary-ligth">intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* Frontend End */}

        <div className="content_experience">
          <h3 className="text-center mb-8 text-primary text-xl">
            Backend JavaScript Development
          </h3>
          <div
            className="
            grid grid-cols-0 gap-2
            sm:grid-cols-2 sm:place-self-auto
            md:grid-cols-2 
            lg:grid-cols-2
            "
          >
            <article className="experience_details">
              <FaNodeJs className="text-4xl text-primary" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-primary-ligth">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiExpress className="text-4xl text-primary" />
              <div>
                <h4>Express Js</h4>
                <small className="text-primary-ligth">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiPostgresql className="text-4xl text-primary" />
              <div>
                <h4>Postgresql</h4>
                <small className="text-primary-ligth">intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <SiMongodb className="text-4xl text-primary" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-primary-ligth">intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillApi className="text-4xl text-primary" />
              <div>
                <h4>Api Services</h4>
                <small className="text-primary-ligth">intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <SiFirebase className="text-4xl text-primary" />
              <div>
                <h4>Firebase</h4>
                <small className="text-primary-ligth">intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* Backend End */}
      </div>
    </section>
  );
};
