interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-16 py-4 mt-8 max-w-full text-xl bg-yellow-50 border border-black border-solid w-[255px] max-md:px-5 transition-transform duration-300 hover:scale-105 hover:bg-yellow-100"
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
  return (
    <div className="pr-20 bg-yellow-50 max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={`${title} product showcase`}
            className="object-contain -mt-20 w-full aspect-[1.2] max-md:-mt-9 max-md:max-w-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center self-stretch my-auto text-black max-md:mt-10">
            <div className="text-2xl font-medium">{subtitle}</div>
            <div className="self-stretch text-5xl font-bold max-md:text-4xl">
              {title}
            </div>
            <Button text={buttonText} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductHeroSection = () => {
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
