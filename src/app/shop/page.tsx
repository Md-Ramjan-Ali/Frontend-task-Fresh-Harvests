"use client";
import React from 'react'
import { useGetAllProductsQuery } from '@/features/api/apiSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ShopPage() {
  const router = useRouter();
  const { data: products = [], isLoading, isError, error } = useGetAllProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) {
    console.error(error);
    return <p>Something went wrong!</p>;
  }

  return (
    <div className="py-10 max-w-screen-xl mx-auto">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">All Products</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {products.map((product) => (
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
            ))}
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  )
}
