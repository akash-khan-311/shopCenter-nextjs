


import { products } from "@/app/data/data";
import { getPrice } from "@/utils/getPrice";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductDetails = ({ params: { id } }) => {
  const filteredProduct = products.find((product) => product.id === Number(id));
  

  const mainPrice = getPrice(
    filteredProduct.price,
    filteredProduct.discountPercentage
  );

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              src={filteredProduct.thumbnail}
              width={400}
              height={500}
              className="mx-auto object-cover"
              alt="product"
            />
            <div className="flex gap-4 mt-4">
              {filteredProduct.images &&
                filteredProduct.images.map((image) => (
                  <Image
                  key={image}
                    src={image}
                    width={100}
                    height={100}
                    className="mx-auto border object-cover"
                    alt="product"
                  />
                ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {filteredProduct.title}
            </h1>
            <Link href={`/category/${filteredProduct.category.toLocaleLowerCase()}`} className="text-[#919090] my-3">
              {filteredProduct.category}
            </Link>
            <div className="mt-3 flex items-center justify-start gap-1">
              <Image src="/star.svg" width={20} height={20} alt="rating" />
              <Image src="/star.svg" width={20} height={20} alt="rating" />
              <Image src="/star.svg" width={20} height={20} alt="rating" />
              <Image src="/star.svg" width={20} height={20} alt="rating" />
            </div>
            <hr className="my-5 bg-black" />
            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${filteredProduct.price}
                </span>
                <span className="font-bold text-2xl">${mainPrice}</span>
              </p>
            </div>
            <div>
              <p className="leading-7">{filteredProduct.description}</p>
              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${mainPrice}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
