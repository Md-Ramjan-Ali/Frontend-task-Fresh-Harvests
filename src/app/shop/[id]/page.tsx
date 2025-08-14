"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useGetAllProductsQuery } from "@/features/api/apiSlice";
import Image from "next/image";
import RelatedProductCard from "@/components/Helper/RelatedProductCard";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";

export default function ProductsDetailsPage() {
  const params = useParams();
  const { id } = params;

  const { data: products = [], isLoading, isError } = useGetAllProductsQuery();
  const [quantity, setQuantity] = useState(1);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  const product = products.find((p) => p.id === id);
  if (!product) return <p>Product not found.</p>;

  const relatedProducts = products.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  );

  return (
    <div className="py-10 max-w-screen-xl mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 px-4">
        {/* Product Image */}
        <div className="p-5 lg:p-10 shadow-sm">
          <div className="relative w-full shadow-sm bg-white">
            <Image
              src={product.images[0]}
              width={550}
              height={300}
              alt={product.productName}
              className=" object-center object-cover w-full rounded-lg"
            />
          </div>
          <div className="flex justify-center mt-2 space-x-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[#749b3f] bg-gray-100 font-bold px-2 py-1 w-fit rounded-lg mb-1">Fruits</p>
            <h1 className="text-3xl font-bold mb-2">{product.productName}</h1>
            <p className="text-yellow-500 mb-2">★★★★★ 5.0 (1 review)</p>
            <p className="text-2xl font-bold text-orange-500 mb-4">
              ${product.price}/kg
            </p>
            <p className="text-gray-600 mb-4">{product.description}</p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-semibold">Quantity:</h2>
              <div className="flex items-center">
                <button
                  className="px-3 py-1 border border-gray-200 rounded"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-3 py-1 border border-gray-200 rounded font-bold text-xl">{quantity}</span>
                <button
                  className="px-3 py-1 border border-gray-200 rounded"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
                <span className="ml-2">/kg</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-3">
              <button className="px-4 py-2 font-bold rounded bg-[#f4f6f6] hover:bg-gray-100 flex items-center justify-center gap-2">
                <MdFavorite className="text-[#c2d3d3] text-2xl cursor-pointer" />
                Save as favorite
              </button>
              <button className="px-10 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 flex items-center justify-center gap-2 cursor-pointer">
                <FaCartShopping />
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* Tabs */}
        <div className="mt-6 pt-4">
          <ul className="flex gap-4 mb-4 text-gray-600 font-semibold">
            <li className="bg-[#749b3f] text-white px-4 py-2 rounded">Description</li>
            <li className="border border-gray-300 bg-white text-gray-400 px-4 py-2 rounded">Reviews (1)</li>
          </ul>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>

      <div className="mt-30">
        <div className="text-center flex flex-col items-center justify-center mb-20 space-y-3">
          <h3 className="text-[#749b3f] bg-gray-100 font-bold px-2 py-1 w-fit rounded-lg mb-1">our Products</h3>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">Related Products</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.slice(0, 4).map((rp) => (
            <RelatedProductCard key={rp.id} product={rp} />
          ))}
        </div>
      </div>
    </div>
  );
}
