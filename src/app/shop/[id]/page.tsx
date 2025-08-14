"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useGetAllProductsQuery } from "@/features/api/apiSlice";
import Image from "next/image";
import RelatedProductCard from "@/components/Helper/RelatedProductCard";

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
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative w-full h-96">
          <Image
            src={product.images[0]}
            alt={product.productName}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-green-600 font-semibold mb-1">Fruits</p>
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
                  className="px-3 py-1 border rounded"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-3 py-1 border rounded">{quantity}</span>
                <button
                  className="px-3 py-1 border rounded"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
                <span className="ml-2">/kg</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="px-4 py-2 border rounded hover:bg-gray-100">
                Save as favorite
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* Tabs */}
        <div className="mt-6 pt-4">
          <ul className="flex gap-4 mb-4 text-gray-600 font-semibold">
            <li className="border-b-2 border-green-500 pb-1">Description</li>
            <li className="border-b-2 border-transparent pb-1">Reviews (1)</li>
          </ul>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-center mb-6 space-y-3">
          <h3 className="text-lg font-bold">our Products</h3>
          <h2 className="text-3xl font-bold">Related Products</h2>
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
