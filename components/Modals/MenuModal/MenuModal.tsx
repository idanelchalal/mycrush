"use client";

import useMenuStore from "@/services/MenuContext";
import Modal from "../Modal";
import MenuOption from "./MenuOption";
import AvatarTitle from "@/components/AvatarTitle";

import Title from "../../Title";

import { TbLogout, TbSelector, TbSettings, TbUser } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

import { signOut } from "next-auth/react";

const MenuModal = ({ session }: any) => {
  const menuStore = useMenuStore();

  return (
    <Modal
      id="menuModal"
      toggleExposure={menuStore.toggleMenu}
      expose={menuStore.menuOpen}
    >
      <div className="fixed z-10 right-2 top-2">
        <AiOutlineClose
          size={28}
          className="cursor-pointer text-secondaryColor"
          onClick={menuStore.toggleMenu}
        />
      </div>
      <div id="menu-options" className="flex flex-col w-full">
        <Title label="Settings" underline icon={TbSettings} />
        <div className="flex flex-col gap-2 justify-center m-4 px-10">
          {session && (
            <>
              <h1 className="text-sm italic text-zinc-300">Logged in as</h1>
              <AvatarTitle session={session} />
            </>
          )}{" "}
        </div>
        <div id="options-container" className="px-10 my-3 !pb-10">
          <MenuOption icon={TbUser}>Edit Profile</MenuOption>
          <MenuOption icon={TbSelector}>Preferences</MenuOption>
          <MenuOption icon={TbLogout} onClick={() => signOut()}>
            Logout
          </MenuOption>
        </div>
      </div>
    </Modal>
  );
};

export default MenuModal;
