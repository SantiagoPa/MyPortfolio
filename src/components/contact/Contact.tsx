import { FormEvent, useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import { HiOutlineMail } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import { getEnvVariables } from "../../helpers";
import Swal from "sweetalert2";
import { useForm } from "../../hooks";

export const Contact = () => {
  const input = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { name, email, message, reset, handleInputChange } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const { status } = await sendForm(
        getEnvVariables().VITE_SERVICE_ID,
        getEnvVariables().VITE_TEMPLATE_ID,
        e.currentTarget,
        getEnvVariables().VITE_EMAIL_PUBLIC_KEY
      );
      if (status === 200) {
        setIsLoading(false);
        Swal.fire(
          "successful task!",
          "the email has been sent successfully",
          "success"
        );
        // e.currentTarget.reset();
        reset();
        input.current?.focus();
      }
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.log(error);
    }
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
              className="text-primary mt-3 inline-block text-lg"
              href="https://api.whatsapp.com/send?phone=573223575357"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End contact options */}

        <form
          className="flex flex-col justify-center items-center gap-5"
          onSubmit={sendEmail}
        >
          <input
            ref={input}
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
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
            value={email}
            onChange={handleInputChange}
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
            value={message}
            onChange={handleInputChange}
          ></textarea>

          <button
            type="submit"
            className={`${isLoading ? "btn btn-loading" : "btn btn-primary"}`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Send Message"}
          </button>
        </form>
        {/* End Form */}
      </div>
    </section>
  );
};
