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
    <div className="bg-white rounded-lg shadow-sm p-2 lg:p-4 text-center group cursor-pointer">
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
  );
};

export default RelatedProductCard;
