import React, { useState } from "react";

const Contact = () => {
  const [msg, setMsg] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setMsg("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "fc450346-2c4a-44f7-9588-6d9d504ee954");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setMsg(
        "Message sent successfully...\n our team will resolve your problem as soon as possible"
      );
      event.target.reset();
    } else {
      console.log("Error", data);
      setMsg(data.msg);
    }
  };
  return (
    <div className="bg-purple-100 min-h-screen py-8">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-5 underline">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Have questions or need support? Fill out the form below, and we'll
            get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-purple-300 p-8 rounded-lg shadow-lg mt-20 form flex flex-col">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className=" text-2xl"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className=" text-2xl"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
               className=" text-2xl"
              >
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your query here"
                spellCheck
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
          <span>{msg}</span>
        </div>
      </section>
    </div>
  );
};

export default Contact;