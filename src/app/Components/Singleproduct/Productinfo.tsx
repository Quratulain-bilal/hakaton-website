
const ProductDetails = () => {
  const tabs = [
    { label: "Description", isActive: true },
    { label: "Additional Information" },
    { label: "Reviews [5]" },
  ];

  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/69cbd14de16cbcd9c46f124f640bc4f76db0b620544f981ecfd2a7b24c99a151?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
      alt: "Product image view 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6bde0de39d7b7cfe4a083430a912eecded21f029872d011e19531d8d88c8871?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
      alt: "Product image view 2",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-12 w-full bg-white px-10 py-12 max-md:px-5 max-md:py-8 max-md:max-w-full">
      {/* Tab Section */}
      <div className="flex flex-wrap gap-10 text-2xl text-neutral-400 w-full max-md:text-xl max-md:gap-5 max-md:flex-col">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={
              tab.isActive ? "text-black font-semibold" : "text-neutral-500"
            }
            tabIndex={0}
            role="tab"
            aria-selected={tab.isActive}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Product Description */}
      <div className="mt-9 text-base text-neutral-400 max-md:px-5 max-md:max-w-full">
        Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable
        active stereo speaker takes the unmistakable look and sound of Marshall,
        unplugs the chords, and takes the show on the road.
      </div>
      <div className="mt-9 text-base text-neutral-400 max-md:px-5 max-md:max-w-full">
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of
        vintage styled engineering. Setting the bar as one of the loudest
        speakers in its class, the Kilburn is a compact, stout-hearted hero with
        a well-balanced audio which boasts a clear midrange and extended highs
        for a sound that is both articulate and pronounced.
      </div>

      {/* Image Section */}
      <div className="mt-11 w-full max-w-screen-xl mx-auto px-5 max-md:mt-10 max-md:px-2">
        <div className="flex gap-5 max-md:flex-col">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col w-6/12 max-md:w-full">
              <img
                loading="lazy"
                src={image.src}
                alt={image.alt}
                className="object-contain w-full rounded-md aspect-[1.74] max-md:mt-7 max-md:max-w-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="self-stretch mt-16 w-full border border-solid border-zinc-300 max-md:mt-10 max-md:max-w-full" />
    </div>
  );
};

export default ProductDetails;
