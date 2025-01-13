import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    title: "Neapolitan Trio",
    category: "Simple and Clear Format",
    price: "$6.99",
    imageUrl:
      "https://www.galaxejuice.co.uk/cdn/shop/files/Firefly_neapolitan_ice_cream_27065_300x300.jpg?v=1728115011",
    bgColor: "bg-rose-400",
  },
  {
    id: 2,
    title: "Red Velvet Bliss",
    category: "Festive or Seasonal Specials",
    price: "$5.99",
    imageUrl:
      "https://img.freepik.com/premium-photo/delicious-fluffy-red-velvet-ice-cream-bowl_787273-5332.jpg",
    bgColor: "bg-gray-900",
  },
  {
    id: 3,
    title: "Oat Milk Mocha",
    category: "Dairy-Free & Vegan Flavors",
    price: "$4.99",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofFrlX5hSFFNtvQb8PoLWQ3C6deR5rTSTMA&s",
    bgColor: "bg-slate-500",
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

          <div className="relative px-6 pb-6 mt-8">
            <span className="block text-slate-100 font-bold underline opacity-75 mb-0">
              {product.category}
            </span>

            {/* Text Section */}
            <div className="flex justify-between">
              <span className="block text-white font-semibold text-xl">
                {product.title}
              </span>
              <span className="block text-black rounded-full bg-yellow-400 text-xs hover:bg-lime-500 font-bold px-3 py-2 pl-2 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
