export const FooterItems = () => {
  return (
    <ul
      className="
      flex flex-wrap justify-center gap-8 m-[0_auto_3rem] 
      flex-col sm:flex-col md:flex-row
    "
    >
      <li>
        <a href="#" className="text-fondo text-lg hover:text-white">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="text-fondo text-lg hover:text-white">
          About
        </a>
      </li>
      <li>
        <a href="#experience" className="text-fondo text-lg hover:text-white">
          Experience
        </a>
      </li>
      <li>
        <a href="#portfolio" className="text-fondo text-lg hover:text-white">
          Portfolio
        </a>
      </li>
      <li>
        <a href="#contact" className="text-fondo text-lg hover:text-white">
          Contact
        </a>
      </li>
    </ul>
  );
};
