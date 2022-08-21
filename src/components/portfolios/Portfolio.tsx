import { PortfolioItem } from "./PortfolioItem";
import { Props } from "./Props";

import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio4.jpg";
import portfolio5 from "../../assets/portfolio5.png";
import portfolio6 from "../../assets/portfolio6.jpg";

const data: Props[] = [
  {
    id: "1",
    img: portfolio1,
    title: "this is a title portfolio",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: "2",
    img: portfolio2,
    title: "this is a title portfolio",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: "3",
    img: portfolio3,
    title: "this is a title portfolio",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: "4",
    img: portfolio4,
    title: "this is a title portfolio",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: "5",
    img: portfolio5,
    title: "this is a title portfolio",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: "6",
    img: portfolio6,
    title: "this is a title portfolio",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="h-full sm:h-full text-center mt-40">
      <h5>My Recent Work</h5>
      <h2 className="text-primary text-3xl">Portfolio</h2>

      <div
        className="
          grid grid-cols-1 gap-10 m-3
          sm:grid-cols-2
          lg:grid-cols-2 
          xl:grid-cols-3
        "
      >
        {data.map(({ demo, github, id, img, title }) => (
          <PortfolioItem
            demo={demo}
            github={github}
            id={id}
            img={img}
            title={title}
            key={id}
          />
        ))}
      </div>
    </section>
  );
};
