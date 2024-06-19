import { getPrice } from "@/utils/getPrice";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    category,
    price,
    rating,
    stock,
    tags,
    brand,
    discountPercentage,
    thumbnail,
    id,
  } = product;

  const mainPrice = getPrice(price, discountPercentage);

  return (
    <div className=" ">
      <div
        className={` w-full   delay-150 h-[205px] lg:h-[310px] bg-[#f8f8f8]  transition-all duration-3000 ease-in-out transform`}
      >
        <Image
          src={thumbnail}
          alt={title}
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
     <div className="backdrop-blur-sm bg-white/30 p-4">
     <h2 className="text-sm lg:text-base ">
        <Link className="text-base font-bold text-white" href={`/product/${id}`}>
          {title}
        </Link>
        <span className="text-gray-400  ">
          <Link href={`/category/${category}`}>({category})</Link>
        </span>
      </h2>
      <p className="text-gray-400 text-sm ">{description}</p>
      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">${price}</span> $
        {mainPrice}
      </p>
     </div>
    </div>
  );
};

export default ProductCard;
