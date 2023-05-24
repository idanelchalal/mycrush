"use client";
import { FC, useCallback, useState } from "react";

import Logo from "./Logo";
import { AiOutlineMenu } from "react-icons/ai";

import useMenuStore from "@/services/MenuContext";
import { useStore } from "zustand";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const menuStore = useStore(useMenuStore);

  return (
    <>
      <header className="flex flex-row items-center justify-evenly w-full px-3">
        <div className="mx-auto">
          <Logo size="large" />
        </div>
        <AiOutlineMenu
          onClick={menuStore.toggleMenu}
          className={`transition cursor-pointer hover:-skew-x-12 text-3xl text-secondaryColor aspect-squareflex items-center justify-center `}
        />
      </header>
    </>
  );
};

export default Header;
