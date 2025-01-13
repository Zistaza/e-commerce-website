import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    title: "Marshmallow Dream",
    category: "Kid's Favorites",
    price: "$3.99",
    imageUrl:
      "https://wearenotmartha.com/wp-content/uploads/Lucky-Charms-Ice-Cream-Featured-500x500.jpg",
    bgColor: "bg-slate-500",
  },
  {
    id: 2,
    title: "Passionfruit Punch",
    category: "Tropical and Exotic",
    price: "$5.99",
    imageUrl:
      "https://t3.ftcdn.net/jpg/09/55/60/38/360_F_955603897_gIAYlFW8Zkdr71P4BvGMl1aOuqWZ1Tgp.jpg",
    bgColor: "bg-gray-800",
  },
  {
    id: 3,
    title: "Matcha Protein Delight",
    category: "Healthy Alternatives",
    price: "$6.49",
    imageUrl:
      "https://t3.ftcdn.net/jpg/10/12/86/50/360_F_1012865013_oRfMph9g1sEvuFXIKqX3tyninFerRKam.jpg",
    bgColor: "bg-lime-900",
  },
];

export default function ProductList() {
  return (
    <div className="p-1 flex shrink-0  flex-wrap items-center justify-center mb-6 gap-16">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex flex-col w-64 relative overflow-hidden m-6 ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute buttom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 263"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="150.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          {/* Image Section */}
          <div className="relative pt-10 px-10  flex justify-center items-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 50%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={200}
              height={200}
              className="relative w-50"
            />
          </div>

          <div className="relative px-6 pb-6 mt-6">
            <span className="block opacity-75 text-lime-300 underline font-bold -mb-1">
              {product.category}
            </span>

            {/* Text Section */}
            <div className="flex justify-between">
              <span className="block font-bold text-cyan-300 text-xl">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-black text-xs mb-6 bg-yellow-400 font-bold px-3 py-2 hover:bg-lime-500 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
