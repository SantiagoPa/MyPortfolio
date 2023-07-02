import { FormEvent, useRef } from "react";

import { HiOutlineMail } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import { getEnvVariables } from "../../helpers";
import Swal from "sweetalert2";

export const Contact = () => {

  const input = useRef<HTMLInputElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     getEnvVariables().VITE_SERVICE_ID,
    //     getEnvVariables().VITE_TEMPLATE_ID,
    //     e.currentTarget,
    //     getEnvVariables().VITE_EMAIL_PUBLIC_KEY
    //   )
    //   .then(
    //     (result) => {
    //       if (result.status === 200) {
    //         Swal.fire(
    //           "successful task!",
    //           "the email has been sent successfully",
    //           "success"
    //         );
    //       }
    //     },
    //     (error) => {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "Something went wrong!",
    //       });
    //       console.log(error);
    //     }
    //   );
    e.currentTarget.reset();
    input.current?.focus();
  };

  return (
    <section
      id="contact"
      className="
        flex flex-col items-center
        h-full w-full 
        sm:h-full
        lg:mt-96 
        xl:h-screen xl:mt-40 
      "
    >
      <h5>Get in Touch</h5>
      <h2 className="text-primary text-3xl">Contact Me</h2>
      <div
        className="
        w-4/5 grid mt-10 grid-cols-1 gap-[12%]
        sm:grid-cols-1 sm:w-3/5
        lg:w-2/5
        xl:grid-cols-[30%_50%] xl:w-4/5
      "
      >
        <div className="flex flex-col gap-5">
          <article
            className="
            content_article
          "
          >
            <HiOutlineMail className="text-2xl mb-2 text-primary" />
            <h4>Email</h4>
            <h5>santiagopadilla117@gmail.com</h5>
            <a
              href="mailto:antiagopadilla117@gmail.com"
              className="text-primary text-lg mt-3"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article
            className="
            content_article
          "
          >
            <SiWhatsapp className="text-2xl mb-2 text-primary" />
            <h4>WhatsApp</h4>
            <h5>+57 322 3575357</h5>
            <a
              className="text-primary mt-3 inline-block text-sm"
              href="https://api.whatsapp.com/send?phone=573223575357"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End contact options */}

        <form className="flex flex-col justify-center items-center gap-5" onSubmit={sendEmail}>
          <input
            ref={input}
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="
              w-full p-6 rounded-lg bg-transparent ring-2
              ring-primary-variant text-white
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="
            w-full p-6 rounded-lg bg-transparent ring-2
            ring-primary-variant text-white
            "
            required
          />

          <textarea
            required
            name="message"
            rows={7}
            placeholder="Your Message"
            className="
              resize-none w-full p-6 rounded-lg bg-transparent ring-2
              ring-primary-variant text-white
            "
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        {/* End Form */}
      </div>
    </section>
  );
};
