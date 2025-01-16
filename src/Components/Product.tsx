"use client"; 

import { useRouter } from "next/navigation"; 
import { useEffect } from "react"; 

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-16 py-4 mt-8 text-xl bg-yellow-50 border border-black border-solid w-[255px] max-md:px-5 transition-transform duration-300 hover:scale-105 hover:bg-yellow-100"
    >
      {text}
    </button>
  );
};

interface ProductHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  buttonText: string;
}

const ProductHero = ({
  title,
  subtitle,
  imageSrc,
  buttonText,
}: ProductHeroProps) => {
  const router = useRouter(); // Hook to use Next.js router

  // Handle button click and navigate to Singleproduct page
  const handleButtonClick = () => {
    router.push("/Singleproduct"); // Navigate to /Singleproduct
    window.scrollTo(0, 0); // Scroll to top of the page
  };

  return (
    <div className="relative flex items-center justify-between bg-yellow-50 px-10 py-20 max-md:flex-col max-md:px-5 max-md:py-10">
      {/* Product Image Section */}
      <div className="w-[60%] max-md:w-full">
        {" "}
        {/* Increased the image container width */}
        <img
          loading="lazy"
          src={imageSrc}
          alt={`${title} product showcase`}
          className="object-contain w-full transition-transform duration-300 hover:scale-105 max-md:mb-10"
        />
      </div>

      {/* Product Text and Button Section */}
      <div className="w-[35%] mr-44  text-right max-md:w-full max-md:text-center ml-5">
        {" "}
        {/* Reduced the gap with ml-5 */}
        <div className="text-2xl font-medium mb-4 text-black">
          {" "}
          {/* Highlighted subtitle */}
          {subtitle}
        </div>
        <div className="text-5xl font-bold mb-6 max-md:text-4xl text-black">
          {" "}
          {/* Highlighted title */}
          {title}
        </div>
        <Button text={buttonText} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

const ProductHeroSection = () => {
  useEffect(() => {
    // Ensure the page starts at the top on load
    window.scrollTo(0, 0);
  }, []); // Runs only once when the component mounts

  return (
    <ProductHero
      title="Asgaard Sofa"
      subtitle="New Arrivals"
      imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ea58caf4afb86059dce1c0555e27a9812717c36984e7c4de161a175b2bbd59d7?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
      buttonText="Order Now"
    />
  );
};

export default ProductHeroSection;
