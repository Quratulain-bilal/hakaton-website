import * as React from "react";
import Checkoutimage from "./Checkoutimage"

// InputField Component
const InputField: React.FC<{
  label: string;
  type?: string;
  id: string;
  placeholder?: string;
}> = ({ label, type = "text", id, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-base font-medium text-black">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="flex shrink-0 mt-6 bg-white rounded-xl border border-solid border-neutral-400 h-[75px] w-full"
        aria-label={label}
      />
    </div>
  );
};

// SelectField Component
const SelectField: React.FC<{ label: string; value: string; id: string }> = ({
  label,
  value,
  id,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-base font-medium text-black">
        {label}
      </label>
      <div className="flex gap-5 justify-between px-7 py-7 mt-6 text-base bg-white rounded-xl border border-solid border-neutral-400 text-neutral-400 max-md:px-5 max-md:max-w-full">
        <div>{value}</div>
      </div>
    </div>
  );
};

// Navigation Component
const Navigation: React.FC = () => {
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
    <><Checkoutimage /><div className="flex relative z-10 flex-col justify-center items-center px-20 py-20 -mt-1.5 w-full text-base text-black whitespace-nowrap min-h-[328px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/994d2cee0a74a300e7e875a7aa49c05fe08e475e64b98c8cab43e2bf378568d3?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
        alt="Background Image"
        className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col mb-0 max-w-full w-[115px] max-md:mb-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ad7e9b8d0c3b729601df28f20044341e4696757b3f73851774de93c17033938?placeholderIfAbsent=true&apiKey=b77517f4450544a992d89244a6a7443d"
          alt="Logo"
          className="object-contain w-full aspect-[0.8] max-md:mr-0.5" />
        <div className="flex gap-1.5">
          <NavigationLink label="Home" isActive={true} />
          {/* Removed Cart Icon */}
          <NavigationLink label="Blog" />
        </div>
      </div>
    </div></>
  );
};

// ProductSummary Component
const ProductSummary: React.FC = () => {
  const products = [
    { name: "Asgaard sofa", quantity: 1, price: "Rs. 250,000.00" },
  ];

  return (
    <div className="flex flex-col px-10 py-20 mx-auto w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-0 max-md:flex-col">
          <div className="flex flex-col w-[45%] max-md:w-full">
            <div className="flex flex-col items-start w-full text-base font-medium text-black max-md:mt-10">
              <div className="text-2xl">Product</div>
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex gap-2.5 items-center self-stretch mt-3.5 text-xs"
                >
                  <div className="grow self-stretch text-base text-neutral-400">
                    {product.name}
                  </div>
                  <div className="self-stretch my-auto">X</div>
                  <div className="self-stretch my-auto">{product.quantity}</div>
                </div>
              ))}
              <div className="mt-6">Subtotal</div>
              <div className="mt-6">Total</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <div className="flex flex-col items-end pl-9 text-base font-light text-black max-md:pl-5">
                <div className="text-2xl font-medium">Subtotal</div>
                <div className="mt-3.5 max-md:mr-1">Rs. 250,000.00</div>
                <div className="mt-6">Rs. 250,000.00</div>
              </div>
              <div className="mt-4 text-2xl font-bold text-yellow-600">
                Rs. 250,000.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CheckoutForm Component
const CheckoutForm: React.FC = () => {
  return (
    <><Checkoutimage /><form className="flex flex-col items-start px-20 pt-16 pb-32 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="self-end w-full max-w-[1168px] max-md:max-w-full">
        <div className="flex gap-6 max-md:flex-col">
          <div className="flex flex-col w-[43%] max-md:w-full">
            <div className="flex flex-col mt-9 w-full max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-4xl font-semibold text-black">
                Billing details
              </div>
              <div className="mt-9 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="w-6/12 max-md:w-full">
                    <InputField label="First Name" id="firstName" />
                  </div>
                  <div className="w-6/12 max-md:w-full">
                    <InputField label="Last Name" id="lastName" />
                  </div>
                </div>
              </div>
              <InputField label="Company Name (Optional)" id="companyName" />
              <SelectField
                label="Country / Region"
                value="Sri Lanka"
                id="country" />
              <InputField label="Street address" id="streetAddress" />
              <InputField label="Town / City" id="city" />
              <SelectField
                label="Province"
                value="Western Province"
                id="province" />
              <InputField label="ZIP code" id="zipCode" />
              <InputField label="Phone" id="phone" type="tel" />
              <InputField label="Email address" id="email" type="email" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:w-full">
            <ProductSummary />
            <div className="shrink-0 mt-8 max-w-full h-px border border-solid border-zinc-300 w-[527px] max-md:mr-1" />
            <div className="flex gap-4 self-start mt-6 text-base text-black max-md:ml-0.5">
              <div className="flex shrink-0 my-auto w-3.5 h-3.5 bg-black rounded-full" />
              <div className="basis-auto">Direct Bank Transfer</div>
            </div>
            <div className="mt-3 text-base font-light text-neutral-400 max-md:mr-1 max-md:max-w-full">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </div>
            <button
              type="submit"
              className="self-center px-16 py-4 mt-10 max-w-full text-xl text-black rounded-2xl border border-black border-solid w-[318px] max-md:px-5"
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </form></>
  );
};

export default CheckoutForm;
