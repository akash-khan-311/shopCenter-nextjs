"use client";

import Banner from "@/app/components/Banner/Banner";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import Loader from "@/app/components/Shared/Loader";
import { products } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React, { Suspense, useEffect, useState } from "react";

const CategoryPage = ({ params: { name } }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedCategory, setSelectedCategory] = useState(products);
  const categories = [...new Set(products.map((product) => product.category))];
  useEffect(() => {
    if (!name || name === "all") {
      setSelectedCategory("");
    } else {
      setSelectedCategory(name);
    }
  }, [name]);
  const handleCategoryClick = (e, category, path) => {
    e.preventDefault();
    setSelectedCategory(category);

    router.push(path, undefined, { scroll: true });
  };

  const isActive = (path) => {
    return pathname === path;
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <main>
      {/* <Banner /> */}
      {/* Product section start */}
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4 flex-col">
          <ul className="list-none">
            <li
              onClick={() => router.push("/category/all", { scroll: false })}
              className="list-none inline-block "
            >
              <Link
                scroll={false}
                className={` capitalize hover:border-b hover:border-white text-white ${
                  isActive("/category/all") ? "border-b border-white" : " "
                }`}
                onClick={(e) => handleCategoryClick(e, "", "/category/all")}
                href={"/category/all"}
              >
                All
              </Link>
            </li>
          </ul>

          {categories.map((category) => (
            <li
              onClick={() =>
                router.push(`/category/${category}`, { scroll: false })
              }
              className="list-none inline-block my-4 flex "
              key={category}
            >
              <Link
                scroll={false}
                className={` hover:border-b hover:border-white capitalize text-white  ${
                  isActive(`/category/${category}`)
                    ? " border-b border-white "
                    : ""
                }`}
                onClick={(e) =>
                  handleCategoryClick(e, category, `/category/${category}`)
                }
                href={`/category/${category}`}
              >
                {category}
              </Link>
            </li>
          ))}
        </div>
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          <Suspense fallback={<Loader />}>
          {filteredProducts &&
            filteredProducts.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </Suspense>
        </div>
      </section>
      {/* Product section start */}
      <section className="bg-[#ced3ca] py-5 lg:py-16">
        <div className="w-10/12 lg:w-4/12 mx-auto">
          <h1 className="italic text-xl lg:text-3xl font-serif my-5 text-center">
            Get the inside scoop
          </h1>
          <p className="text-center text-sm lg:text-base">
            Sign up for new product drops, behind-the-scenes content, and
            monthly &quot;5 Things I&apos;m Digging&quot; emails
          </p>
          <form action="#" className="mb-5">
            <input
              type="text"
              className="p-3 mt-10 border border-black focus:outline-none w-full"
              placeholder="Enter your email"
            />
            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-2 mt-2 text-white">
              See what we&apos;re doing
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
