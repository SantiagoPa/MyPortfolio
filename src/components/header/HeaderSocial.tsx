import { BsLinkedin, BsGithub } from "react-icons/bs";

export const HeaderSocial = () => {
  return (
    <div 
        className="hidden flex-col items-center gap-3 
        absolute left-1 top-1/2 after:w-1 after:h-8 
        after:bg-primary  md:flex lg:flex xl:flex 2xl:flex
     ">
      <a
        href="https://www.linkedin.com/in/santiago-padilla-arcia-6562ba205/"
        target="_blank"
        className="text-primary hover:text-white"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/SantiagoPa"
        target="_blank"
        className="text-primary hover:text-white"
      >
        <BsGithub />
      </a>
    </div>
  );
};
