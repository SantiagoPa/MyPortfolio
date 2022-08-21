import CVpdf from "../../assets/cv.pdf";

export const CV = () => {
  return (
    <div className="mt-9 flex flex-row gap-5 justify-center">
      <a
        href={CVpdf}
        download
        className="text-primary ease-in-out 
                duration-200 btn
            "
      >
        Donwload CV
      </a>
      <a
        href="#contact"
        className="ease-in-out duration-200
             btn btn-primary
            "
      >
        Let's Talk
      </a>
    </div>
  );
};
