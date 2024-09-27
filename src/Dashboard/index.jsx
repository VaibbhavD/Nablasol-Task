import React from "react";
import Bg_Image from "../assets/Dashboard_bg.png";

function Index() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('${Bg_Image}')`,
      }}
    >
      <div className="text-center text-white pt-10 ">
        <h3 className="text-gray-300 md:text-7xl text-5xl px-4 mt-5  font-semibold">
          Vaibhav Dhamanage
        </h3>
        <h1 className="text-gray-600 text-xl md:text-2xl my-4">
          Nablasol Task
        </h1>
        <div className="flex flex-col justify-center items-center gap-2 pt-20 ">
          <button
            type="button"
            className="p-4 w-56 border border-gray-400 rounded-full text-blue-500 hover:text-blue-700"
          >
            <span className="text-lg font-bold ">Task 1</span>
          </button>
          <button
            type="button"
            className="p-4 w-56 border border-gray-400 rounded-full text-blue-500 hover:text-blue-700"
          >
            <span className="text-lg font-bold ">Task 2</span>
          </button>
        </div>
        <div className="flex gap-2 justify-center items-center mt-14 md:mt-40">
          <span className="text-gray-500 font-bold text-xl hover:text-white">
            Vaibhav Dhamanage
          </span>
          <div className="flex gap-2 items-center">
            <a href="https://github.com/VaibbhavD/" target="_blank">
              <img
                src="https://pngimg.com/uploads/github/github_PNG40.png"
                width={28}
              />
            </a>
            <a href="https://my-portfolio-puxr.vercel.app/" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3616/3616770.png"
                width={24}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
