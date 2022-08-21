import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export const FooterSocial = () => {
  return (
    <div
      className="
      flex flex-row justify-center items-center gap-4 mb-10 
    "
    >
      <a
        href="https://facebook.com"
        target="_blank"
        className="
        text-white text-lg p-4 rounded-xl ring-2
        ring-transparent hover:bg-transparent hover:ring-fondo
        hover:text-fondo bg-fondo
      "
      >
        <FaFacebookSquare />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        className="text-white p-4 rounded-xl ring-2
        ring-transparent hover:bg-transparent hover:ring-fondo
        hover:text-fondo text-lg bg-fondo"
      >
        <FaInstagramSquare />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        className="text-white text-lg p-4 rounded-xl ring-2
        ring-transparent hover:bg-transparent hover:ring-fondo
        hover:text-fondo bg-fondo"
      >
        <FaTwitterSquare />
      </a>
    </div>
  );
};
