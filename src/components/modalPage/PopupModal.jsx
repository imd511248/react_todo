import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
// import "../modalPage/modalStyle.css";

const PopupModal = () => {
  return (
    <>
      <div className="w-64 h-64 p-3 absolute top-28 right-0 left-0 bg-slate-200 mx-auto flex justify-center flex-col items-center rounded-2xl invisible" id="popup">
        <FaCircleCheck className="w-20 h-20 text-green-600" />
        <h6 className="text-xl mt-3">Successfully</h6>
      </div>
    </>
  );
};

export default PopupModal;
