import React from "react";

export default function Progressor() {
  return (
    <div>
      <div className="flex items-start max-w-screen-lg mx-auto mt-10 pl-16">
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-purple-400 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          </div>

          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-pink-500">
              <span className="text-orange-600">Step 1: </span> Pick Your Sweet
              Treat!
            </h6>
            <p className="text-xs font-bold text-blue-900">
              "Explore the World of Delights – What's Your Pick?
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-purple-400 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          </div>

          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-pink-500">
              <span className="text-orange-600">Step 2: </span>Add Your
              Toppings!
            </h6>
            <p className="text-xs font-bold text-blue-900">
              "Add a Dash of Yum – It’s Your Creation!"
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-purple-400 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          </div>

          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-pink-500">
              <span className="text-orange-600">Step 3: </span>Scoop It Up –
              It's Time to Order!
            </h6>
            <p className="text-xs font-bold text-blue-900">
              "Final Step to Ice Cream Heaven – Let’s Go!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
