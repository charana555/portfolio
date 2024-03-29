import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactIcons from "./ContactIcons";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text) {
            alert("Message sent successfully");
          }
          e.target.reset();
        },
        (error) => {
          alert("Somthing went wrong");
          console.log(error.text);
        }
      );
  };
  return (
    <section
      id="contact"
      className=" w-[95%] md:w-[80%] mx-auto pt-16 overflow-hidden"
    >
      <h2 className="font-slab py-4 font-[530] ml-2 text-5xl text-transparent  bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 text-center md:text-left">
        CONTACT ME
      </h2>
      <hr className=" mb-16" />

      <div className=" grid grid-cols-1 md:grid-cols-2  gap-5 md:p-5 p-2">
        <div className=" p-3 md:p-14 flex flex-col justify-center items-center">
          <p className="md:text-4xl text-2xl font-slab text-yellow-500">
            Feel free to get in touch
          </p>
          <p className="md:text-3xl text-xl font-slab my-2">
            You contact me at :
          </p>
          <ContactIcons />
          <div className="flex justify-center py-4">
            <button
              suppressHydrationWarning
              className="bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-3xl "
            >
              <a
                className=" bg-transparent flex items-center justify-center gap-2"
                href="Charan_Resume.pdf"
                download="Charana Resume.pdf"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <form onSubmit={sendEmail} ref={form} className="p-3 md:p-10">
          {/* name  */}
          <div className="my-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-white tracking-wider"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="bg-gray-800 text-white text-sm rounded-lg w-full p-2.5 outline-none my-1"
            />
          </div>
          {/* email   */}
          <div className="my-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white tracking-wider"
            >
              Your Email
            </label>
            <input
              type="text"
              id="email"
              name="user_email"
              className="bg-gray-800 text-white text-sm rounded-lg w-full p-2.5 outline-none my-1"
            />
          </div>
          {/* message */}
          <div className="my-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-white tracking-wider"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              name="message"
              className="block p-2.5 w-full text-sm bg-gray-800 text-white  rounded-lg outline-none my-1  "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="py-2">
            <input
              type="submit"
              value={"Contact Me"}
              className="bg-yellow-400 text-gray-800 font-bold py-2 px-6 rounded-3xl cursor-pointer "
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
