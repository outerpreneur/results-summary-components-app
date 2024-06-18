import React from "react";
import data from "../data.json";
import reactionSvg from "../assets/images/icon-reaction.svg";
import memorySvg from "../assets/images/icon-memory.svg";
import verbalSvg from "../assets/images/icon-verbal.svg";
import visualSvg from "../assets/images/icon-visual.svg";

const icons = {
  reaction: reactionSvg,
  memory: memorySvg,
  verbal: verbalSvg,
  visual: visualSvg,
};

export default function Item() {
  console.log(icons);

  return (
    <ul className="flex flex-col gap-4">
      {data.map((item) => (
        <li
          key={item.id}
          className={`bg-${item.color} bg-opacity-10 py-3 px-4 rounded-lg text-${item.color} flex justify-between`}
        >
          <div className="flex">
            <img src={icons[item.icon]} alt="" className="mr-2" />
            <p>{item.category}</p>
          </div>
          <p className="text-black font-bold">
            {item.score}
            <span className="text-gray-500 font-normal"> / 100</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
