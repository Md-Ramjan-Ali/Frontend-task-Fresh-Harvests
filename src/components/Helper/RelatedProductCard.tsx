"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RelatedProductCardProps {
  product: any;
}

const RelatedProductCard: React.FC<RelatedProductCardProps> = ({ product }) => {
  const router = useRouter();
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 w-48 text-center">
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
  );
};

export default RelatedProductCard;
