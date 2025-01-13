import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center m-0 mb-0 mt-2 bg-gradient-to-r from-lime-300 to-amber-200">
        <nav className="flex justify-center flex-wrap gap-6 mt-8 text-2xl underline text-slate-500 font-medium">
          <a className="hover:text-rose-500 text-blue-900 font-bold" href="#">
            {" "}
            Home
          </a>
          <a className="hover:text-rose-500 text-blue-900 font-bold" href="#">
            {" "}
            About
          </a>
          <a className="hover:text-rose-500 text-blue-900 font-bold" href="#">
            {" "}
            Delivery
          </a>
          <a className="hover:text-rose-500 text-blue-900 font-bold" href="#">
            {" "}
            Contact
          </a>
        </nav>

        <div className="flex justify-center space-x-5">
          <a
            href="https://web.facebook.com/"
            target="blank"
            rel="nofollow noopener"
            className="transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <Image
              src="https://img.icons8.com/?size=80&id=118562&format=png"
              alt="facebook logo"
              width={80}
              height={80}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/zeenat-yameen-0168a829b"
            target="blank"
            rel="nofollow noopener"
            className="transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <Image
              src="https://img.icons8.com/?size=80&id=108812&format=png"
              alt="linkedin logo"
              width={80}
              height={80}
            />
          </a>

          <a
            href="https://instagram.com/zeenat.yameen"
            target="blank"
            rel="nofollow noopener"
            className="transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <Image
              src="https://img.icons8.com/?size=48&id=7QPcOVZoGlmf&format=png"
              alt="instagram logo"
              width={48}
              height={48}
            />
          </a>

          <a
            href="https://twitter.com"
            target="blank"
            rel="nofollow noopener"
            className="transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <Image
              src="https://img.icons8.com/?size=80&id=2pPtAXbhG5D2&format=png"
              alt="twitter logo"
              width={80}
              height={80}
            />
          </a>
        </div>

        <p className="text-center hover:cyan-600 text-black underline font-medium mb-8">
          Zistaza@2024 All Rights Reserved
        </p>
        <br />
        <br />
        <br />
      </footer>
    </div>
  );
}
