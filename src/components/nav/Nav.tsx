import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaUserAstronaut, FaBook } from "react-icons/fa";
import { RiCodeFill } from "react-icons/ri";

import "./nav.module.css";
import { NavProps } from "../../interface";

export const Nav = ({ isActive, changeNavActive }: NavProps) => {

  return (
    <nav
      className="
      flex bg-prepare-blur w-max flex-row
      py-3 px-7 z-50 fixed left-[calc(50%-19.5rem)]
      translate-x-1/2 bottom-8 
      gap-3 rounded-3xl backdrop-blur-lg
      "
    >
      <a
        href="#"
        className={
          isActive === "#"
            ? "nav-item bg-slate-900 text-white"
            : "nav-item"
        }
        onClick={() => changeNavActive("#")}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        className={
          isActive === "#about"
            ? "nav-item bg-slate-900 text-white"
            : "nav-item"
        }
        onClick={() => changeNavActive("#about")}
      >
        <FaUserAstronaut />
      </a>
      <a
        href="#experience"
        className={
          isActive === "#experience"
            ? "nav-item bg-slate-900 text-white"
            : "nav-item"
        }
        onClick={() => changeNavActive("#experience")}
      >
        <FaBook />
      </a>
      <a
        href="#portfolio"
        className={
          isActive === "#portfolio"
            ? "nav-item bg-slate-900 text-white"
            : "nav-item"
        }
        onClick={() => changeNavActive("#portfolio")}
      >
        <RiCodeFill />
      </a>
      <a
        href="#contact"
        className={
          isActive === "#contact"
            ? "nav-item bg-slate-900 text-white"
            : "nav-item"
        }
        onClick={() => changeNavActive("#contact")}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};
