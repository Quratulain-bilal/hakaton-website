"use client"
import * as React from "react";

// LinkItem Component
const LinkItem: React.FC<{ text: string; href: string }> = ({ text, href }) => (
  <a href={href} className="mt-12 hover:text-neutral-600 max-md:mt-10">
    {text}
  </a>
);

// LinkSection Component
const LinkSection: React.FC<{
  title: string;
  links: { text: string; href: string }[];
}> = ({ title, links }) => (
  <div className="flex flex-col items-start text-base font-medium text-black whitespace-nowrap">
    <div className="text-neutral-400">{title}</div>
    {links.map((link, index) => (
      <LinkItem key={index} {...link} />
    ))}
  </div>
);

// NewsletterForm Component
const NewsletterForm: React.FC = () => (
  <form
    className="flex gap-3 mt-14 text-sm max-md:mt-10"
    onSubmit={(e) => e.preventDefault()}
  >
    <div className="flex flex-col text-neutral-400">
      <label htmlFor="emailInput" className="sr-only">
        Enter Your Email Address
      </label>
      <input
        type="email"
        id="emailInput"
        placeholder="Enter Your Email Address"
        className="bg-transparent border-b border-black"
        required
        aria-label="Email subscription input"
      />
    </div>
    <div className="flex flex-col">
      <button
        type="submit"
        className="font-medium text-black hover:text-neutral-600"
        aria-label="Subscribe to newsletter"
      >
        SUBSCRIBE
      </button>
      <div className="shrink-0 h-px border border-black border-solid" />
    </div>
  </form>
);

// Footer Component
const Footer: React.FC = () => {
  const navigationLinks = {
    title: "Links",
    links: [
      { text: "Home", href: "/" },
      { text: "Shop", href: "#shop" },
      { text: "Blog", href: "#blog" },
      { text: "Contact", href: "/Contact" },
    ],
  };

  const helpLinks = {
    title: "Help",
    links: [
      { text: "Payment Options", href: "/payment" },
      { text: "Returns", href: "/returns" },
      { text: "Privacy Policies", href: "/privacy" },
    ],
  };

  return (
    <footer className="flex flex-col items-start px-20 pt-24 pb-10 w-full bg-white max-md:px-5 max-md:max-w-full">
      {/* Footer top section */}
      <div className="flex flex-wrap gap-10 w-full max-w-[1131px] max-md:max-w-full">
        {/* Address Section */}
        <address className="grow shrink my-auto text-base text-neutral-400 w-[271px] not-italic">
          400 University Drive Suite 200 Coral Gables,
          <br />
          FL 33134 USA
        </address>

        {/* Navigation Links Section */}
        <LinkSection {...navigationLinks} />

        <div className="flex-auto self-start max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {/* Help Links Section */}
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <LinkSection {...helpLinks} />
            </div>

            {/* Newsletter Section */}
            <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10">
                <div className="self-start text-base font-medium text-neutral-400">
                  Newsletter
                </div>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Divider */}
      <div className="shrink-0 self-center mt-12 max-w-full h-px border border-solid border-zinc-300 w-[1240px] max-md:mt-10" />

      {/* Footer Bottom Section */}
      <div className="mt-9 text-base text-black">
        2022 Meubel House. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
