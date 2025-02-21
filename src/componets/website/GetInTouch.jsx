import React from "react";
import image from "../../assets/images/contactimage.jpg";
const GetInTouch = () => {
  return (
    <div id="contact" className="pb-[5rem] relative">
      {/* <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[2rem] right-3 -z-10"></div> */}
      {/* <div className="blue-bg-shape bottom-[-2rem] left-[-2rem] -z-10 rotate-[-45deg]"></div> */}
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-stretch items-center gap-7">
        <div className="flex flex-col gap-5">
          <h1 className="heading text-center text-lg font-medium lg:text-start">
            Ready to Lead with Innovation? <br /> Let’s Start Your Project
          </h1>
          <p className="description text-center lg:text-start">
            Reach out to discover how our tech solutions can propel your
            business forward.
          </p>
          <img
            src={image}
            alt=""
            className="max-h-[25rem] object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <p className="gradient-text uppercase">Let's connect</p>
          <div className="bg-gradient-to-b text-white from-primary to-primary rounded-2xl w-fit p-7">
            <h2 className="text-3xl font-medium">
              Connect With Our Team to Get Started!
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-1 gap-3 mt-3"
            >
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="">
                  <label htmlFor="">Name*</label>
                  <input
                    type="text"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    required
                    autoComplete="off"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="">
                  <label htmlFor="">Email*</label>
                  <input
                    type="email"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    required
                    autoComplete="off"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="">
                  <label htmlFor="">Subject*</label>
                  <input
                    type="text"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    required
                    autoComplete="off"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="">
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    autoComplete="off"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="">Message*</label>
                <textarea
                  type="text"
                  rows="4"
                  placeholder="Enter your message here"
                  className="w-full outline-none p-3 rounded-lg text-black"
                  required
                  autoComplete="off"
                />
              </div>
              <button className="mt-4 bg-white text-black px-5 py-3 rounded-full   hover:text-primary hover:-translate-y-1 duration-300 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
