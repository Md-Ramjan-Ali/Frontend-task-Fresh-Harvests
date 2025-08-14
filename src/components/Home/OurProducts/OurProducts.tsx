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
    <div className="py-10 max-w-6xl mx-auto">
      <div className=" flex flex-col justify-center items-center ">
        <div className="">
          <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        </div>

        {/* Category Buttons */}
        <div className="flex  gap-4 mb-6">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded border ${selectedCategory === null ? "bg-green-500 text-white" : ""
              }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded border ${selectedCategory === cat.id ? "bg-green-500 text-white" : ""
                }`}
            >
              {cat.categoryName}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0,8).map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border p-4 w-48 text-center">
              {/* Product Image */}
              <div className="w-full relative mb-3">
                <Image src={product.images[0]} alt={product.productName} width={50} height={50} className="w-full h-40 object-cover mb-2" />
              </div>
              {/* Name */}
              <h3 className="font-semibold">{product.productName}</h3>
              {/* Price */}
              <p className="text-blue-600 font-bold">${product.price}</p>

              {/* Add to cart button */}
              <button
                onClick={() => router.push(`/shop/${product.id}`)}
                className="mt-3 w-full border border-gray-300 rounded-md py-2 text-sm font-medium hover:bg-gray-100"
              >
                Add to cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
     <div className="flex justify-center">
        <button onClick={() => router.push(`/shop`)} className="px-3 py-2 border-1 border-amber-500 text-orange-400 mt-10">See All Products</button>
     </div>
    </div>
  )
}
