import Image from 'next/image';
import React from 'react';

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-200 to-gray-500 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/043/288/955/non_2x/ice-cream-on-an-empty-pastel-background-summer-background-with-ice-cream-and-copy-space-summer-time-composition-for-web-banner-cards-invitations-photo.jpg"
          alt="main pic"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-6xl font-bold mb-4">
          &quot;Dive Into Our Sweet Selection!&quot;
        </h2>
        <p className="text-cyan-900 text-lg text-center font-bold mb-6 max-w-xl">
          &quot;Click, Scoop, Smile &ndash; Shop Now!&quot;
        </p>

        <button
          type="button"
          className="bg-yellow-500 text-white text-sm font-bold py-3 px-6 rounded-full shadow-lg hover:bg-lime-500 transition duration-300"
        >
          &quot;Stay Up, Sweet Deals Drop at 10PM!&quot;
        </button>
      </div>
    </div>
  );
}
