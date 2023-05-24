"use client";
import { FC } from "react";
interface MenuModalProps {
  children?: React.ReactNode;
  expose?: boolean;
  toggleExposure: () => void;
  id: string;
}

const Modal: FC<MenuModalProps> = ({
  children,
  expose,
  toggleExposure,
  id,
}) => {
  return (
    <>
      <div
        id={id}
        className={`
          overflow-hidden
          transition
          ${expose ? " opacity-100 z-10" : "opacity-0"}
          absolute bg-black/30 w-screen h-screen top-0 flex justify-center items-center`}
      >
        <div
          className={`duration-300 bg-white border border-zinc-300 w-[90vw] max-w-[450px] max-h-[60vh] rounded-md
              transition
              ${expose ? "translate-y-0" : "translate-y-[100vh]"}
          `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
