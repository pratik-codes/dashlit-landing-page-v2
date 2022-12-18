"use client";

import { useState } from "react";
import Details from "./components/details";
import Tabs from "./components/tabs";

const SneakPeakSection = () => {
  const [currentFeature, setCurrentFeature] = useState("links & folders");

  return (
    <section id="sneak" className="mx-auto mt-[20rem] animate-fade-in">
      <span className="mt-12 mb-2 text-4xl font-medium">Sneak Peak</span>
      <div className="mt-8 animate-fade-in rounded-[30px] bg-transparent-white py-6 px-10  hover:border hover:border-solid hover:border-indigo">
        <Tabs
          currentFeature={currentFeature}
          setCurrentFeature={setCurrentFeature}
        />
        <Details currentFeature={currentFeature} />
      </div>
    </section>
  );
};

export default SneakPeakSection;
