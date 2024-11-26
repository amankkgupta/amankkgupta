import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";


const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLICKEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.description,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setFormData({
          name: "",
          email: "",
          description: "",
        });
        setIsLoading(false);
        toast.success("Success ! Mail Sent, You will receive reply soon.");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Failed ! Try after Sometime.");
      });
  };

  return (
    <div id="contactme" className="bg-blue-950 p-5 pt-20 md:px-20 md:py-10">
      <h1 className="text-4xl text-emerald-500 font-bold text-center rounded-full py-10">
        Contact me
      </h1>
      <div className="flex justify-center items-center">
        <div className=" bg-blue-900 w-full lg:w-1/2 rounded-2xl p-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-white text font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full font-semibold px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-green-500 bg-blue-400"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2"
                htmlFor="subject"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full font-semibold px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-green-500 bg-blue-400"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full font-semibold px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-green-500 bg-blue-400"
                rows="5"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className={`bg-emerald-500 font-bold text-white px-12 py-2 rounded-lg ${
                  !isLoading ? "hover:bg-emerald-600" : "bg-emerald-300"
                }`}
              >
                {isLoading ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
