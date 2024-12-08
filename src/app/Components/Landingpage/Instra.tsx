const InstagramContainer = () => {
  return (
    <section
      className="flex relative flex-col justify-center items-center px-20 py-32 w-full min-h-[450px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets/TEMP/3359512434e8c4bdcbec7d90fe5e612b3410c147e2cd898fadf880cd6e50e75a?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d)",
      }}
      aria-labelledby="instagram-title"
    >
      <div className="absolute inset-0 bg-black opacity-0" />
      <div className="flex relative flex-col items-center mb-0 max-w-full w-[454px] text-center z-10 max-md:px-5 max-md:py-24 max-md:w-full">
        <h2
          id="instagram-title"
          className="text-6xl font-semibold text-black max-md:text-5xl"
        >
          Our Instagram
        </h2>
        <p className="mt-2 text-black">{`Follow our store on Instagram`}</p>
        <a
          href="https://instagram.com"
          className="px-16 py-4 mt-5 bg-red-50 rounded-[50px] w-[255px] text-center hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all ease-in-out duration-300 transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow Us
        </a>
      </div>
    </section>
  );
};

export default InstagramContainer;
