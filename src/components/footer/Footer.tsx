
import { FooterItems } from "./FooterItems";

export const Footer = () => {
  return (
    <footer className="bg-primary text-center text-lg mt-28">
      <a
        href="#"
        className="
          text-fondo text-2xl font-medium 
          mb-8 mt-5 inline-block
          md:text-4xl
        "
      >
        Santiago Padilla
      </a>

      <FooterItems/>

      <div className="pb-28 text-fondo h-full">
        <small>&copy; Santiago Dev, All rights reserved</small>
      </div>

    </footer>
  );
};
