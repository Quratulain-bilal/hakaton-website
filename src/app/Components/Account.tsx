

import Image from "next/image";

// InputField Component
const InputField = ({
  label,
  type = "text",
  id,
  className,
}: {
  label: string;
  type: string;
  id: string;
  className: string;
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-base font-medium mb-6">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`flex shrink-0 w-full bg-white rounded-xl border border-solid border-neutral-400 h-[75px] ${className}`}
        aria-label={label}
      />
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  const NavigationLink = ({
    label,
    isActive,
  }: {
    label: string;
    isActive?: boolean;
  }) => (
    <div className={`${isActive ? "font-medium" : "font-light"}`}>{label}</div>
  );

  const NavigationIcon = ({ src, alt }: { src: string; alt: string }) => (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 my-auto w-5 aspect-square"
    />
  );

  return (
    <div className="flex relative z-10 flex-col justify-center items-center px-20 py-20 w-full text-base text-black whitespace-nowrap min-h-[328px] max-md:px-5 max-md:pb-24">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/994d2cee0a74a300e7e875a7aa49c05fe08e475e64b98c8cab43e2bf378568d3?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col mb-0 max-w-full w-[115px] max-md:mb-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ad7e9b8d0c3b729601df28f20044341e4696757b3f73851774de93c17033938?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
          alt="Logo"
          className="object-contain w-full aspect-[0.8] max-md:mr-0.5"
        />
        <div className="flex gap-1.5">
          <NavigationLink label="Home" isActive={true} />
          <NavigationIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
            alt="Arrow"
          />
          <NavigationLink label="My Account" />
        </div>
      </div>
    </div>
  );
};

// Main Account Component
const Account = () => {
  return (
    <div className="font-sans bg-white text-black">
      {/* Replace Hero Section with Navigation */}
      <Navigation />

      {/* Login and Register Section */}
      <div className="px-20 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* Login Form */}
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <form className="flex flex-col items-start self-stretch my-auto w-full text-black max-md:mt-10 max-md:max-w-full">
              <h1 className="text-4xl font-semibold">Log In</h1>
              <InputField
                label="Username or email address"
                id="login-email"
                type="email"
                className="mt-6"
              />
              <InputField
                label="Password"
                id="login-password"
                type="password"
                className="mt-6"
              />
              <div className="flex gap-5 mt-11 text-base max-md:mt-10">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="flex shrink-0 bg-white rounded-md border border-solid border-neutral-400 h-[27px] w-[30px]"
                />
                <label htmlFor="remember-me" className="basis-auto">
                  Remember me
                </label>
              </div>
              <div className="flex gap-8 mt-9">
                <button
                  type="submit"
                  className="px-16 py-4 text-xl rounded-2xl border border-black hover:bg-gray-100"
                >
                  Log In
                </button>
                <button
                  type="button"
                  className="my-auto text-base font-light basis-auto"
                >
                  Lost Your Password?
                </button>
              </div>
            </form>
          </div>

          {/* Register Form */}
          <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <form className="flex flex-col grow items-start px-20 pt-9 pb-14 w-full text-base text-black bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <h1 className="text-4xl font-semibold">Register</h1>
              <InputField
                label="Email address"
                id="register-email"
                type="email"
                className="mt-6"
              />
              <p className="self-stretch mt-9 font-light max-md:max-w-full">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="self-stretch mt-5 font-light max-md:max-w-full">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <span className="font-semibold">privacy policy.</span>
              </p>
              <button
                type="submit"
                className="mt-16 max-md:mt-10 px-16 py-4 text-xl rounded-2xl border border-black hover:bg-gray-100"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
