import * as React from "react";
import Image from "./Image";

const ContactPage: React.FC = () => {
  const contactInfoData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b84ab48252134b857ed5a75c3632975008884d825c330306e666572e5880f01e?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
      title: "Address",
      details: ["236 5th SE Avenue, New York NY10000, United States"],
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad8b6da666f5399b42c73c5cfc73c18a3f5b302e8fa6cee72c0a12fccc36bda4?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
      title: "Phone",
      details: ["Mobile: +(84) 546-6789", "Hotline: +(84) 456-6789"],
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/33fdf35fddf9339c521220ac850f018805dee7707ded888dd5bd951d83937b10?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
      title: "Working Time",
      details: ["Monday-Friday: 9:00 - 22:00", "Saturday-Sunday: 9:00 - 21:00"],
    },
  ];

  const serviceFeatures = [
    {
      title: "Free Delivery",
      description: "For all orders over $50, consectetur adipim scing elit.",
    },
    {
      title: "90 Days Return",
      description: "If goods have problems, consectetur adipim scing elit.",
    },
    {
      title: "Secure Payment",
      description: "100% secure payment, consectetur adipim scing elit.",
    },
  ];

  return (
   <><Image /><>
      <div className="flex flex-col items-center px-20 pt-24 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-w-[1058px] max-md:max-w-full">
          <div className="text-4xl font-semibold text-black">
            Get In Touch With Us
          </div>
          <div className="mt-2 text-base text-center text-neutral-400 w-[644px] max-md:max-w-full">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </div>
          <div className="self-stretch mt-3.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col px-12 py-16 mx-auto mt-16 w-full text-black bg-white max-md:px-5 max-md:mt-10">
                  {contactInfoData.map((info, index) => (
                    <div key={index} className="mt-11 max-md:mt-10">
                      <div className="flex gap-8 self-start max-md:ml-2">
                        <img
                          loading="lazy"
                          src={info.icon}
                          className="object-contain shrink-0 self-start mt-1 aspect-[0.79] w-[22px]"
                          alt={`${info.title} icon`} />
                        <div className="flex flex-col">
                          <div className="self-start text-2xl font-medium">
                            {info.title}
                          </div>
                          {info.details.map((detail, index) => (
                            <div key={index} className="text-base">
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                <form className="flex flex-col grow items-start pt-28 pr-8 pb-16 pl-20 w-full text-base text-black bg-white max-md:px-5 max-md:pt-24 max-md:mt-8 max-md:max-w-full">
                  <label htmlFor="name" className="font-medium">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="self-stretch px-8 py-7 mt-6 bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full"
                    placeholder="Your name" />
                  <label htmlFor="email" className="mt-9 font-medium">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="self-stretch px-8 py-7 mt-6 bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full"
                    placeholder="Email address" />
                  <label htmlFor="subject" className="mt-9 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="self-stretch px-8 py-7 mt-6 bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full"
                    placeholder="Subject" />
                  <label htmlFor="message" className="mt-9 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="self-stretch px-8 pt-7 pb-16 mt-6 bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:mr-1 max-md:max-w-full"
                    placeholder="Your message" />
                  <button
                    type="submit"
                    className="px-16 py-3 mt-12 max-w-full whitespace-nowrap rounded-2xl border border-black border-solid w-[237px] max-md:px-5 max-md:mt-10"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div><div className="px-20 py-24 w-full bg-red-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {serviceFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <div className="self-start text-3xl font-medium text-black">
                {feature.title}
              </div>
              <div className="text-xl text-neutral-400">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div></></>
    
  );
};

export default ContactPage;
