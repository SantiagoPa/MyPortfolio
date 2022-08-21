import { CV } from "./CV";
import { HeaderSocial } from "./HeaderSocial";
import Me from "../../assets/me.png";

export const Header = () => {
  return (
    <header className="h-screen">
      <div className="m-auto container h-full  pt-5 sm:pt-28 md:pt-20 lg:pt-5 xl:pt-16 overflow-hidden text-center relative">
        <h5>Hello I'm</h5>
        <h1>Santiago Padilla</h1>
        <h5 className="text-primary-ligth">Frontend React Developer</h5>
        <CV />
        <HeaderSocial />

        <div
          className="
          bg-gradient-to-b from-primary to-transparent
          w-64 h-96 absolute
          left-[calc(50%-8rem)] mt-16 rounded-t-xl
          pt-20 pb-5 pl-5 pr-5
        "
        >
          <img src={Me} alt="me" />
        </div>

        <a
          href="#contact"
          className="
          hidden
          text-primary hover:text-white absolute -right-10
          rotate-90
          bottom-20 font-light text-lg
          md:flex lg:flex xl:flex 2xl:flex
          "
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};
