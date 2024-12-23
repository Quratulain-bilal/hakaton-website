import ImageHead from "@/app/shop/Imagehead"
import ProductCard from "@/app/shop/ProductCard";
import Result from "@/app/shop/Result";
import ShopPage from "@/app/shop/Shoppage";

export default function ShopPageComponent() {
  return (
    <div>
      <ImageHead />
      <Result/>
      <ProductCard />
      <ShopPage />
    </div>
  );
}
