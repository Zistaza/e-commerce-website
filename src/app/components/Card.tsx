import Image from 'next/image';
import React from 'react';

const FloatingImageContent = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10 px-20">
        <h2 className="text-4xl font-bold mb-4 text-purple-700">Whimsical Frozen Wonders!</h2>
        <p className="text-pink-600 font-bold mb-4">
          &quot;Discover frozen wonders that transport you to a world of pure magic! Our playful flavors and enchanting designs make every bite unforgettable.&quot;
        </p>
        <button className="text-white font-bold bg-lime-500 px-4 py-2 ring-4 ring-cyan-400 rounded hover:bg-purple-300 transition duration-300">
          Order Now
        </button>

        <h3 className="text-2xl font-bold mt-6 mb-2 text-center text-blue-700">
          &quot;Craving something fresh? Our delightful new flavours will be available soon!&quot;
        </h3>

        <ul className="mt-4">
          <li className="text-purple-900">
            <span className="font-bold text-black">✨Ice Cream Happy Hour: </span>
            &quot;Cool off with a sweet deal &ndash; 50% off all ice creams from 3 PM to 6 PM. Don&apos;t miss out on the happiest hour of the day!&quot;
          </li>
          <br />

          <li className="text-purple-900">
            <span className="font-bold text-black">🍨Buy One, Get One Free: </span>
            &quot;Double the sweetness! Buy any ice cream and get another one absolutely free. Share the joy!&quot;
          </li>
          <br />

          <li className="text-purple-900">
            <span className="font-bold text-black">👨‍👩‍👧‍👦Family Bundle Deal: </span>
            &quot;Perfect for the whole family! Get 4 ice creams for the price of 3. Enjoy a delicious treat together.&quot;
          </li>
          <br />

          <li className="text-purple-900">
            <span className="font-bold text-black">🎉Ice Cream Party Pack: </span>
            &quot;Planning a party? Get a pack of 10 mini ice cream cones for $X. Perfect for sharing with friends!&quot;
          </li>
          <br />
        </ul>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0 pr-10">
        <Image
          src="https://img.freepik.com/premium-photo/yummy-ice-cream-food-photography-food-styling-ai-generated-photo_894117-752.jpg?w=360"
          alt="alterpic"
          width={500}
          height={600}
          className="w-200 h-300 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 ml-28"
        />
      </div>
    </section>
  );
};

export default FloatingImageContent;
