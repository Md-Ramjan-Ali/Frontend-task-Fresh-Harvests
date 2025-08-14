"use client";
import React, { useState } from "react";
import { useGetCategoriesQuery, useGetAllProductsQuery } from "@/features/api/apiSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OurProducts() {
  const router = useRouter();
  const { data: categories = [], isLoading: catLoading } = useGetCategoriesQuery();
  const { data: products = [], isLoading: prodLoading } = useGetAllProductsQuery();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (catLoading || prodLoading) return <p>Loading...</p>;


  const filteredProducts = selectedCategory
    ? products.filter((p) => p.categoryId === selectedCategory)
    : products;
  return (
    <div className="relative pt-30 max-w-screen-xl mx-auto">
      <div className=" flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center space-y-2 items-center mb-5">
          <h2 className="text-sm bg-[#f2f5ec] text-[#749b3f] px-2 py-1 rounded-xl font-bold w-fit">Our Products</h2>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">Our Fresh Products</h2>
          <p className="max-w-md mx-auto text-center">We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.</p>
        </div>

        {/* Category Buttons */}
        <div className="flex gap-2 md:gap-4 mb-6">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-1 py-0.5 md:px-4 md:py-2 rounded border cursor-pointer ${selectedCategory === null ? "bg-green-500 text-white" : ""
              }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-1 py-0.5 md:px-4 md:py-2  rounded border cursor-pointer ${selectedCategory === cat.id ? "bg-green-500 text-white" : ""
                }`}
            >
              {cat.categoryName}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, 8).map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm p-2 lg:p-4 text-center group cursor-pointer">
              {/* Product Image */}
              <div className="w-full relative mb-3 bg-[#f2f5ec]  rounded-xl">
                <Image src={product.images[0]} alt={product.productName} width={50} height={50} className="w-full h-40 object-center mb-2 p-5 lg:p-10" />
              </div>
              {/* Name */}
              <h3 className="font-semibold">{product.productName}</h3>
              {/* Price */}
              <p className=" text-base">${product.price}/kg</p>

              {/* Add to cart button */}
              <button
                onClick={() => router.push(`/shop/${product.id}`)}
                className="mt-3 w-full border border-gray-300 rounded-md py-2 text-sm font-medium  hover:bg-[#FF6A1A] hover:text-white group-hover:bg-[#FF6A1A] group-hover:text-white transition-colors cursor-pointer"
              >
                Add to cart
              </button>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p className="text-center text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <button onClick={() => router.push(`/shop`)} className="px-3 py-2 border-1 border-[#FF6A1A] text-[#FF6A1A] hover:bg-[#FF6A1A] hover:text-white mt-10 cursor-pointer rounded font-semibold">See All Products</button>
      </div>
      <div className="absolute top-10 right-10 -z-10 hidden lg:flex">
        <Image src="/images/pata.png" width={70} height={70} alt='pata' />
      </div>
      <div className="absolute top-20 left-10 -z-10 hidden lg:flex">
        <Image src="/images/pata.png" width={70} height={70} alt='pata' />
      </div>

    </div>
  )
}
