import React from "react";

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-cyan-200 to-cyan-200">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 rounded-lg bg-gradient-to-r from-blue-800 to-gray-900 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://media.istockphoto.com/id/470712118/photo/scoops-of-strawberry-ice-cream-in-a-dish-with-mint-garnish.jpg?s=612x612&w=0&k=20&c=DmrzpbV-e8tkLHuptylMJ3A4ljcBEszEOqA4vjFVwhM="
                  alt="ice"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
                <h3 className="z-10 text-2xl font-bold text-white zoom-out absolute top-0 left-0 p-4">
                  Strawberry Swirl
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black-10 to-gray-700">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="https://png.pngtree.com/thumb_back/fw800/background/20240716/pngtree-mango-ice-cream-in-a-bowl-with-slices-image_16004499.jpg"
                  alt="ice 2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
                <h3 className="z-10 text-2xl font-bold text-white absolute top-0 left-0 p-2">
                  Mango Mania
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-col-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://img.freepik.com/premium-photo/delicious-scoop-hazelnut-ice-cream-topped-with-chocolate-shavings-nuts_658005-33832.jpg"
                    alt="ice3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
                  <h3 className="z-10 text-2xl font-bold text-white absolute top-0 left-1 p-2">
                    Chocolate Hazelnut
                  </h3>
                </a>

                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://imgcdn.stablediffusionweb.com/2024/10/3/4272b2a5-4d15-4c20-ba1f-aaaf0cf77477.jpg"
                    alt="ice3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
                  <h3 className="z-10 text-2xl font-bold text-white absolute top-0 left-1 p-1">
                    Black Sesame Bliss
                  </h3>
                </a>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black-10 to-gray-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://www.insidetherustickitchen.com/wp-content/uploads/2018/06/lemon-ice-cream-final-5-740x1110-inside-the-rustic-kitchen.jpg"
                  alt="ice4"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
                <h3 className="z-10 text-2xl font-bold text-white absolute top-0 left-0 p-2">
                  Lemon Cheesecake
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
