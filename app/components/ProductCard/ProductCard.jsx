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
    <div>
      <div
        className={`relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform`}
      >
        <Image
          src={thumbnail}
          alt={title}
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <h2 className="text-sm lg:text-base mt-2">
        <Link className="text-base font-bold" href={`/product/${id}`}>
          {title}
        </Link>
        <span className="text-[#919090]">
          <Link href="/category">({category})</Link>
        </span>
      </h2>
      <p className="text-[#919090] text-sm ">{description}</p>
      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">${price}</span> $
        {mainPrice}
      </p>
    </div>
  );
};

export default ProductCard;
