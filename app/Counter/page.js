"use client";
import { useState } from "react";

const page = () => {
  let [counter, SetCounter] = useState(22);

  const ageUp = () => {
    if (counter >= 0 && counter <= 21) {
      counter++;
      SetCounter(counter);
    } else {
      console.log(
        `Ohh! sirr Mr.Ray is not that old ohk!,${Math.floor(Math.random() * 5)}`
      );
    }
  };
  const ageDown = () => {
    if (counter >= 1 && counter <= 22) {
      counter--;
      SetCounter(counter);
    } else {
      console.log(
        `Heyy! wait u can't vanish Mr.Ray,${Math.floor(Math.random() * 5)}`
      );
    }
  };
  return (
    <section className="w-full bg-slate-600 h-[100vh] flex justify-center items-center">
      <h2 className="absolute rounded-lg top-1 h-6 text-white text-center w-10 bg-red-400">
        {counter}
      </h2>
      <h2 className="absolute rounded-lg  left-1 h-6 text-white text-center w-10 bg-red-400">
        {counter}
      </h2>{" "}
      <h2 className="absolute rounded-lg  right-1 h-6 text-white text-center w-10 bg-red-400">
        {counter}
      </h2>
      <h2 className="absolute rounded-lg  bottom-1 h-6 text-white text-center w-10 bg-red-400">
        {counter}
      </h2>
      <div className="flex items-center justify-center flex-col bg-white h-64 w-60 rounded-lg shadow-lime-300 shadow-2xl sm:">
        <h1 className="font-bold font-mono text-3xl mb-2 bg-cyan-200 rounded-xl p-2 text-emerald-500">
          {counter}
        </h1>
        <h1 className="font-bold font-mono text-2xl">Count My Age</h1>
        <button
          onClick={ageUp}
          className="py-2 px-16 rounded-lg bg-yellow-300 text-slate-700 font-bold active:bg-yellow-500 mt-5 border-none"
        >
          UP
        </button>
        <button
          onClick={ageDown}
          className="py-2 px-12 rounded-lg bg-yellow-300 text-slate-700 font-bold  mt-2 active:bg-yellow-500 border-none "
        >
          DOWN
        </button>
      </div>
    </section>
  );
};

export default page;
