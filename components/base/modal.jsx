import React from "react";

const Modal = ({ onClose ,innerElement}) => {
  return (
    <div
      className={`fixed w-[100vw] h-[100vh] bg-anakiwa transition-all top-0 ${
        onClose ? "left-0" : "left-[-100vw] opacity-0"
      }`}
    >
      <div className="container mx-auto flex flex-row py-[10px] justify-between items-center">
          {innerElement}
      </div>
    </div>
  );
};

export default Modal;
