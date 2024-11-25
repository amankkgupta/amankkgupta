import React, { useRef } from "react";
import { X, Github, Linkedin } from "lucide-react";

export const Contact = ({ showContact }) => {
  const container = useRef();
  const closeContact = (e) => {
    if (container.current == e.target) showContact();
  };
  return (
    <div
      ref={container}
      onClick={closeContact}
      className="container inset-0 fixed flex justify-center items-center backdrop-blur-sm"
    >
      <div className="relative popup flex-col rounded-xl md:p-24 p-8 flex justify-center gap-10 items-center bg-white">
        <button className="absolute top-4 right-4" onClick={showContact}>
          <X size={38} />
        </button>
        <div className="flex flex-col md:flex-row gap-10">
          <a
            href="https://github.com/amankkgupta"
            target="_blank"
            className="py-2 px-10 text-center font-bold bg-emerald-500 rounded-lg"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/amankkgupta"
            target="_blank"
            className="py-2 px-10 text-center font-bold bg-emerald-500 rounded-lg"
          >
            LinkedIn
          </a>
          <a
            href="mailto:amangupta65734@gmail.com"
            className="py-2 px-10 text-center font-bold bg-emerald-500 rounded-lg"
          >
            Send Email
          </a>
        </div>
        <h1 className="font-bold text-lg">
          Email:{" "}
          <a
            href="mailto:amangupta65734@gmail.com"
            className="text-emerald-500 underline"
          >
            amangupta65734@gmail.com
          </a>
        </h1>
      </div>
    </div>
  );
};
