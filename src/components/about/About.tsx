import { FaAward, FaUserTie } from "react-icons/fa";
import { BsFolderCheck } from "react-icons/bs";
// import MeAbout from "../../assets/me-about.jpg";
import MeAbout from "../../assets/me-aboutv1.jpg";

export const About = () => {
  return (
    <section id="about" className="h-screen w-full flex flex-col items-center">
      <h5>Get to Know</h5>
      <h2 className="text-primary text-3xl">About me</h2>

      <div
        className="
          mt-12 grid grid-cols-1 place-items-center 
          gap-8 
          xl:grid-cols-[35%_50%] xl:gap-20
          lg:grid-cols-1 lg:gap-0
          sm:grid-cols-1 sm:gap-0
        "
      >
        <div
          className="
          aspect-square rounded-3xl 
          bg-gradient-to-l from-transparent
          to-primary grid place-items-center
          w-1/3 m-[2rem_auto_4rem] 
          h-min
          xl:w-full xl:m-3
          sm:w-1/3 sm:m-[2rem_auto_4rem] sm:h-min
          "
        >
          <div
            className="
            about_me
            w-[65%]
            sm:w-[65%]
            md:w-full
            lg:w-full
            rounded-3xl overflow-hidden
            "
          >
            <img
              className="img h-min xl:h-[36rem] lg:h-min sm:h-min"
              src={MeAbout}
              alt="about image"
            />
          </div>
        </div>

        <div className="about_content text-center ms:text-center lg:text-center">
          <div className="grid lg:grid-cols-3 gap-6 grid-cols-1 :grid-cols-1">
            <article className="about_card">
              <span className="flex justify-center items-center pb-3">
                <FaAward className="text-primary text-xl mb-5" />
              </span>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about_card">
              <span className="flex justify-center items-center pb-3">
                <FaUserTie className="text-primary text-xl mb-5" />
              </span>
              <h5>Work With</h5>
              <small>2+ development companies</small>
            </article>

            <article className="about_card">
              <span className="flex justify-center items-center pb-3">
                <BsFolderCheck className="text-primary text-xl mb-5" />
              </span>
              <h5>Projects</h5>
              <small>6+ Projects Complete</small>
            </article>
          </div>

          <p
            className="
            text-primary-ligth
              m-[1.5rem_0rem]
              w-96 sm:w-96 sm:mt-[1.5rem_0rem]
              lg:mt-8 lg:mb-10 lg:w-[40rem]
              lg:text-center
              xl:mt-8 xl:mb-10 
            "
          >
            more than a year of experience in different frontend projects, where
            I have learned a lot and developed many communication and leadership
            skills, also with technical skills, clean code and good
            architectures.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
