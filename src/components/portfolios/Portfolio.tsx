import { PortfolioItem } from "./PortfolioItem";
import { Props } from "./Props";

import portfolio1 from "../../assets/portfolio1.jpeg";
import portfolio2 from "../../assets/portfolio2.jpeg";
import portfolio3 from "../../assets/portfolio3.jpeg";
import portfolio4 from "../../assets/portfolio4.jpeg";
import portfolio5 from "../../assets/portfolio5.png";
import portfolio6 from "../../assets/portfolio6.jpeg";

const data: Props[] = [
  {
    id: "1",
    img: portfolio1,
    title: "Calculator CRC",
    github: "https://github.com/SantiagoPa/CalculatorCRCApp",
    demo: "https://crc-app.netlify.app",
  },
  {
    id: "2",
    img: portfolio2,
    title: "Maps App",
    // github: "https://github.com/SantiagoPa",xx
    demo: "https://maps-app-sp.netlify.app",
  },
  {
    id: "3",
    img: portfolio3,
    title: "Peajes App",
    github: "https://github.com/SantiagoPa/PeajeApp",
    demo: "https://app-peaje-santiagopa.netlify.app",
  },
  {
    id: "4",
    img: portfolio4,
    title: "CLI Clima App",
    github: "https://github.com/SantiagoPa/AppClima",
    // demo: "https://github.com",
  },
  {
    id: "5",
    img: portfolio5,
    title: "My Portfolio - Dev Santiago",
    github: "https://github.com/SantiagoPa/MyPortfolio",
    demo: "https://github.com",
  },
  {
    id: "6",
    img: portfolio6,
    title: "Voting System  with Blockchain",
    github: "https://github.com/canielcm/micro_services_voting_system",
    demo: "https://votingsystemunicor.xyz/auth/login",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="h-full sm:h-full text-center">
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
