"use client";
import * as React from "react";

const cartItems = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/55e4d11ff7c044d670622e89fe3db3c3176ef5511542223e88e16d621389a635?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d",
    name: "Asgaard sofa",
    price: "Rs. 250,000.00",
    quantity: 1,
  },
];

const features = [
  {
    title: "Free Delivery",
    description: "For all orders over $50, consectetur adipiscing elit.",
  },
  {
    title: "90 Days Return",
    description: "If goods have problems, consectetur adipiscing elit.",
  },
  {
    title: "Secure Payment",
    description: "100% secure payment, consectetur adipiscing elit.",
  },
];

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

  return (
    <div id="Cart" className="flex relative z-10 flex-col justify-center items-center px-20 py-20 -mt-1.5 w-full text-base text-black whitespace-nowrap min-h-[328px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/994d2cee0a74a300e7e875a7aa49c05fe08e475e64b98c8cab43e2bf378568d3?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
        alt="Background"
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
          <NavigationLink label="Cart" />
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  const handleRemoveItem = () => {
    // Handle remove item logic here
  };

  const CartItemComponent = ({
    item,
    onRemove,
  }: {
    item: any;
    onRemove: () => void;
  }) => (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
        <div className="flex grow gap-9 text-base text-neutral-400 max-md:mt-10">
          <img
            loading="lazy"
            src={item.image}
            alt={item.name}
            className="object-contain shrink-0 max-w-full rounded-none aspect-square w-[106px]"
          />
          <div className="grow shrink my-auto w-[87px]">{item.name}</div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
        <div className="flex gap-10 self-stretch my-auto text-base text-black max-md:mt-10 max-md:max-w-full">
          <div className="my-auto basis-auto text-neutral-400">
            {item.price}
          </div>
          <div className="px-3.5 py-1 whitespace-nowrap rounded-md border border-solid border-neutral-400">
            {item.quantity}
          </div>
          <div className="my-auto basis-auto">{item.price}</div>
          <button
            onClick={onRemove}
            aria-label="Remove item"
            className="focus:outline-none"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/96554a9f86bd3fd8c39408fbbd8fa8ea76b10f4a501e0797d8eeff82580216d1?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
              alt="Remove"
              className="object-contain shrink-0 self-start w-7 aspect-square"
            />
          </button>
        </div>
      </div>
    </div>
  );

  const FeatureComponent = ({ feature }: { feature: any }) => (
    <div className="flex flex-col grow max-md:mt-10">
      <div className="self-start text-3xl font-medium text-black">
        {feature.title}
      </div>
      <div className="text-xl text-neutral-400">{feature.description}</div>
    </div>
  );

  return (
    <div id="cart333" className="flex overflow-hidden flex-col bg-white">
      <Navigation />
      <div className="px-20 py-9 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5f562c388e1fb067e9f85c97eedaa4647b4ab1969e48747407f0a9db8aad717?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
              alt="Company Logo"
              className="object-contain grow shrink-0 max-w-full aspect-[8.85] w-[247px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="z-10 px-20 py-16 -mt-1.5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col justify-center items-center px-16 py-4 w-full text-base font-medium text-black whitespace-nowrap bg-yellow-50 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between max-w-full w-[529px]">
                  <div>Product</div>
                  <div>Price</div>
                  <div className="flex gap-9">
                    <div>Quantity</div>
                    <div>Subtotal</div>
                  </div>
                </div>
              </div>
              <div className="mt-14 mr-6 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                {cartItems.map((item, index) => (
                  <CartItemComponent
                    key={index}
                    item={item}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-20 pt-4 pb-20 mx-auto w-full bg-yellow-50 max-md:px-5 max-md:mt-10">
              <div className="self-center text-3xl font-semibold text-black">
                Cart Totals
              </div>
              <div className="flex gap-5 justify-between mt-16 max-md:mt-10">
                <div className="flex flex-col self-start text-base font-medium text-black whitespace-nowrap">
                  <div>Subtotal</div>
                  <div className="self-start mt-8">Total</div>
                </div>
                <div className="flex flex-col">
                  <div className="self-end text-base text-neutral-400">
                    Rs. 250,000.00
                  </div>
                  <div className="mt-8 text-xl font-medium text-yellow-600">
                    Rs. 250,000.00
                  </div>
                </div>
              </div>
              <button className="px-14 py-4 mt-11 mr-2.5 ml-3 text-xl text-black rounded-2xl border border-black border-solid max-md:px-5 max-md:mt-10 max-md:ml-2.5">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 py-24 w-full bg-red-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <FeatureComponent feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
