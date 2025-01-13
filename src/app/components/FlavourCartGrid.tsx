import Image from "next/image";
import React from "react";
import { FaCarTunnel } from "react-icons/fa6";

const FlavourCartGrid = () => {
  const flavourImages = [
    "https://s.hungryghostfoodandtravel.com/media/20240912223116/thai-coconut-ice-cream_done-830x521.png",
    "https://www.creamscafe.com/wp-content/uploads/2023/11/The-Adorable-Snowman-1080x1080px.jpg",
    "https://icecreamservices.com/wp-content/uploads/2024/04/Orange-Ice-Cream.webp",
    "https://img.freepik.com/free-photo/chocolate-ice-cream-waffle-cone-black-background-3d-illustration_1142-38717.jpg",
    "https://www.ibreatheimhungry.com/wp-content/uploads/2012/02/minticecream3.jpg",
    "https://img.freepik.com/premium-photo/lavender-flavored-ice-cream-flower-bouquet-pink-sugar-rose-petals-trendy-hard-light-dark-shadow-black-stone-concrete-background-top-view_164638-11812.jpg",
  ];

  const flavourNames = [
    "Tropical Paradise",
    "Seasonal Specials",
    "Fruity Delights",
    "Chocolate Heaven",
    "Sugar-Free Options",
    "International Inspirations",
  ];

  const flavourPrices = ["$139", "$159", "$179", "$182", "$119", "$129"];

  const flavourDiscounts = ["$119", "$139", "$138", "$123", "$99", "$170"];

  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20230325/pngtree-summer-ice-cream-popsicle-candies-image_2094860.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.2,
        }}
      />
      <h1 className="font-bold text-6xl mb-4 text-lime-900 z-10 relative">
        Trending Now
      </h1>
      <h1 className="text-2xl font-bold text-purple-900 underline z-10 relative">
        Your Scoop Awaits!
      </h1>

      <section
        id="Projects"
        className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <Image
                src={flavourImages[index]}
                alt={`Flavour ${index + 1}`}
                width={288}
                height={320}
                className="h-80 w-72 object-cover rounded-t-xl"
              />

              <div className="px-4 py-3 w-72 bg-orange-200">
                <span className="text-blue-900 mr-3 font-bold uppercase text-xs">
                  Category
                </span>
                <p className="text-lg font-bold text-lime-900 underline truncate block capitalize">
                  {flavourNames[index]}
                </p>

                <div className="flex items-center">
                  <p className="text-lg font-semibold text-slate-900 my-3 cursor-auto">
                    {flavourDiscounts[index]}
                  </p>
                  <del className="text-sm text-rose-900 cursor-auto ml-2">
                    {flavourPrices[index]}
                  </del>
                  <div className="ml-auto">
                    <FaCarTunnel className="w-5 h-5 text-purple-900 bg-lime-400 hover:text-pink-600" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FlavourCartGrid;
