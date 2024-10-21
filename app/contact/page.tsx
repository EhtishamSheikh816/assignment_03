import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="py-20">
      <h1 className="text-4xl font-extrabold text-purple-950 text-center pb-7 ">
        Contact Us
      </h1>
      <div className="items-center ml-80 p-16 space-y-8 border border-black w-[40%] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            className="w-[40px] py-1 bg-transparent border border-black"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            className="w-[40px] py-1 bg-transparent border border-black"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            className="w-[40px] bg-transparent border border-black"
            name="message"
            id="message"
            rows={8}
            placeholder="Your Message"
          ></textarea>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 rounded text-white font-medium border-black justify-center py-2 px-3 "
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
