import React from "react";
import Item from "./Item";

export default function Container() {
  return (
    <section className="bg-white h-screen md:h-auto mx-auto grid md:max-w-[736px] grid-cols-1 md:grid-cols-2 rounded-3xl">
      {/* column 1 */}
      <div className="text-white text-center bg-gradient-to-b from-light-slate-blue to-light-royal-blue rounded-b-3xl  md:rounded-3xl p-10 flex flex-col gap-5">
        <p className="text-lg md:text-2xl font-bold opacity-65">Your Result</p>
        <div className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] bg-gradient-to-b from-violet-blue to-light-royal-blue flex justify-center items-center mx-auto rounded-full flex-col">
          <p className="text-5xl md:text-6xl font-bold text-center">
            76
            <span className="text-sm font-bold text-center block text-gray-400">
              of 100
            </span>
          </p>
        </div>
        <h2 className="text-xl md:text-3xl font-bold">Great</h2>
        <p className="text-md md:text-lg text-gray-300 mx-w-[100px] text-center">
          Your performance exceeded 65% of the people conducting the text here
        </p>
      </div>
      {/* column 2 */}
      <div className="p-10 flex flex-col justify-between">
        <h3 className="font-bold text-lg mb-5 md:mb-0 md:text-2xl">Summary</h3>
        <div>
          <Item />
        </div>
        <button className="bg-dark-gray-blue text-white py-3 rounded-3xl font-bold hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue mt-5 md:mt-2">
          Continue
        </button>
      </div>
    </section>
  );
}
