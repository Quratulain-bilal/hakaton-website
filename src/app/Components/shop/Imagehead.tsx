import React from "react";
import Result from "./Result";
import ProductCards from "./ProductCard";


interface NavigationItemProps {
  text: string;
  isBold?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ text, isBold }) => (
  <div className={`${isBold ? "font-medium" : "font-light"}`}>{text}</div>
);

interface NavigationBreadcrumbProps {
  items: Array<{ text: string; isBold?: boolean }>;
}

const NavigationBreadcrumb: React.FC<NavigationBreadcrumbProps> = ({
  items,
}) => (
  <div className="flex gap-1.5 flex-wrap justify-center">
    {items.map((item, index) => (
      <React.Fragment key={index}>
        <NavigationItem text={item.text} isBold={item.isBold} />
        {index < items.length - 1 && (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db13939cabd153a09de09c25864d1f622bda5d116dbe6552d6605aca283c27a4?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
            className="object-contain shrink-0 my-auto w-5 aspect-square"
            alt=""
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

const ProductCard: React.FC<{
  image: string;
  title: string;
  price: string;
}> = ({ image, title, price }) => {
  return (
    <div className="flex flex-col items-start text-black">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain w-full aspect-square"
      />
      <div className="mt-3.5 text-base">{title}</div>
      <div className="mt-3 text-2xl font-medium">{price}</div>
    </div>
  );
};

const ServiceCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col grow max-md:mt-10">
      <div className="self-start text-3xl font-medium text-black">{title}</div>
      <div className="text-xl text-neutral-400">{description}</div>
    </div>
  );
};

const App: React.FC = () => {
  const products = 

 [
    { title: "Service 1", description: "Description for service 1" },
    { title: "Service 2", description: "Description for service 2" },
    { title: "Service 3", description: "Description for service 3" },
  ];

  const navigationItems = [
    { text: "Home", isBold: true },
    { text: "Shop", isBold: false },
  ];

  return ( <div id="shopp">
    <div >
      {/* Navigation Section */}
      <div className="flex relative z-10 flex-col justify-center items-center px-5 py-8 sm:py-10 w-full text-base text-black whitespace-nowrap min-h-[328px] sm:px-5 md:px-20 md:py-20">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/994d2cee0a74a300e7e875a7aa49c05fe08e475e64b98c8cab43e2bf378568d3?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
          className="object-cover absolute inset-0 w-full h-full"
          alt="Background Image"
        />
        <div className="flex relative flex-col mb-0 max-w-full w-full sm:w-[124px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dcf059b5e45dbfb4010ee60a510e061112fde85a36230d28ba9a35eb7c94170?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
            className="object-contain w-full aspect-[0.94] mb-3 sm:mb-5"
            alt="Company Logo"
          />
          <NavigationBreadcrumb items={navigationItems} />
        </div>
      </div>

      {/*result section */}
<Result/>

      {/* Products Section */}
     <ProductCards/>

      {/* Services Section */}
    
    </div>
    </div>
  );
};

export default App;
