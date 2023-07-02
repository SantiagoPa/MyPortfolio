import { FaGithub } from "react-icons/fa";
import { Props } from "./Props";

export const PortfolioItem = ({ demo, github, img, title }: Props) => {
  return (
    <article
      className="
    ring-2 ring-transparent ease-in bg-fondo-variant
    duration-300 hover:ring-primary-variant p-5
    hover:bg-transparent rounded-3xl
  "
    >
      <div className="overflow-hidden w-full flex justify-center items-center">
        <img className="rounded-2xl" src={img} alt={img} />
      </div>
      <h3 className="m-[1.2rem_0_2rem]">{title}</h3>
      <div className="flex flex-row gap-x-2 justify-center items-center mb-3">
        {github ? (
          <a
            href={github}
            className="btn flex flex-row gap-x-2"
            target="_blank"
          >
            <FaGithub />
            Github
          </a>
        ) : null}

        {demo ? (
          <a href={demo} className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        ) : null}
      </div>
    </article>
  );
};
