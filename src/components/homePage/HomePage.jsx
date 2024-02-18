import React from "react";
import { InputPage } from "../inputpage/InputPage";
import PopupModal from "../modalPage/PopupModal";

const HomePage = () => {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold uppercase w-fit mx-auto text-cyan-400 mt-9">to-do list redux-toolkit</h1>
        <div className="w-11/12 sm:w-10/12 md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 mx-auto mt-6">
          <label className="text-2xl font-serif block capitalize text-gray-800">add your to-do items</label>
          <InputPage />
        </div>
      </div>
      <PopupModal />
    </>
  );
};

export default HomePage;
