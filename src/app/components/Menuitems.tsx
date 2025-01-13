"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import FlavourCard from "./FlavourCard";
import { Flavour } from "@/pages/types";

const Menu = () => {
  const [flavours, setFlavours] = useState<Flavour[]>([]);
  const [cart, setCart] = useState<Flavour[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchFlavours() {
      const response = await fetch("/api/flavours");
      const data = await response.json();
      setFlavours(data);
    }

    fetchFlavours();

    //local storage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addTOCart = (flavour: Flavour) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, flavour];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
};
    

    //cart visibility
    const toggleCart = () => {
      setShowCart((prev) => !prev);
    };

    //checkout model
    const goToCheckout = () => {
      setIsCheckout(true);
    };

    //cart clear model
    const clearCart = () => {
      setCart([]);
      localStorage.removeItem("Cart");
    };

    return (
      <div className="relative min-h-screen py-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
          style={{
            backgroundImage:
              "url('https://png.pngtree.com/thumb_back/fh260/background/20230325/pngtree-summer-ice-cream-popsicle-candies-image_2094860.jpg')",
          }}
        ></div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h1 className="text-5xl font-bold text-purple-800 mb-4">
            Indulge in Our Creamy Ice Creams!
            </h1>
            <p className="text-xl font-bold text-rose-600">
            Savor the taste of our flavorful ice creams! get yours today!






            </p>
          </div>

          {/* flavours section */}

          <div className="max-w-6xl mx-auto p-4 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-semibold text-purple-700">
            {flavours.map((flavour) => (
              <FlavourCard
                key={flavour.id}
                {...flavour}
                onAddToCart={addTOCart}
              />
            ))}
          </div>

          {/* Cart  section */}
          <div className="max-w-6xl mx-auto mt-8">
            <button
              onClick={toggleCart}
              className="bg-cyan-900 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-900 ml-8 font-bold transition duration-300 ease-in-out transform"
            >
              {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
            </button>

            {showCart && (
              <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-4xl underline text-center font-bold mb-4 text-purple-700">
                Your Sweet Picks:                </h2>
                {cart.length > 0 ? (
                  <div>
                    <ul>
                      {cart.map((flavour, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-center mb-6 transform transition-all duration-300 ease-in-out"
                        >
                          <img
                            src={flavour.image}
                            alt={flavour.image}
                            className="w-40 h-20 sm:w-24 inline-block transition-transform duration-300 ease-in-out transform text-black"
                          />
                          <span className="ml-4 text-lg font-medium text-black">
                            {flavour.name} - ${flavour.price}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-between items-center mt-6 text-black">
                      <span className="font-bold text-xl">
                        Total: 
                        ${cart.reduce(
                          (total, flavour) => 
                            total + flavour.price,
                          0
                        )}
                      </span>

                      <div>
                        <button
                          onClick={goToCheckout}
                          className="bg-green-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                        >
                          Proceed To CheckOut
                        </button>

                        <button
                          onClick={clearCart}
                          className="bg-red-600 py-3 px-8 rounded-lg ml-4 text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                        >
                          Clear Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-lg font-bold text-red-600">Your Cart Is Empty!</p>
                )}
              </div>
            )}
          </div>

          {/* checkout section */}

          {isCheckout && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
              <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
                <h2 className="text-4xl font-bold text-purple-800 mb-4">
                  CheckOut
                </h2>
                <p className="text-lg font-semibold text-red-600">
                Review Your Ice Cream Choices Before You Proceed
                </p>

                <div className="mt-4">
                  <ul>
                    {cart.map((flavour, index) => (
                      <li key={index} className="flex justify-between mb-4">
                        <span>{flavour.name}</span>
                        <span>{flavour.price}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between mt-4">
      <span className="font-semibold">Total: </span>
      <span className="font-bold">
        ${cart
          .reduce((total, flavour) => total + flavour.price, 0) // Sum up the prices
          .toFixed(2)} {/* Format to 2 decimal places */}
      </span>
    </div>
                </div>

                <div className="mt-6 flex ustify-between">
                  <button
                    onClick={() => setIsCheckout(false)}
                    className="bg-slate-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-red-700 transition duration-300"
                  >
                    Close
                  </button>

                  <button
                    onClick={() =>
                      alert(
                        "Yay! Your Ice Cream is on the Fast Track to Your Door—See You Soon!"
                      )
                    }
                    className="bg-lime-700 text-white ml-16 py-2 px-6 rounded-lg text-l font-bold shadow-md hover:bg-purple-600 transition duration-300"
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* end section */}
        </div>
      </div>
    );
  };

export default Menu;



