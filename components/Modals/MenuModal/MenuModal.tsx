"use client";
import useMenuStore from "@/services/MenuContext";
import { FC, MouseEventHandler } from "react";
import Title from "../../Title";
import { TbLogout, TbSelector, TbSettings, TbUser } from "react-icons/tb";
import Modal from "../Modal";
import MenuOption from "./MenuOption";

interface MenuModalProps {}

const MenuModal: FC<MenuModalProps> = ({}) => {
  const menuStore = useMenuStore();

  return (
    <>
      <Modal toggleExposure={menuStore.toggleMenu} expose={menuStore.menuOpen}>
        <div id="menu-options" className="flex flex-col w-full">
          <Title label="Settings" underline icon={TbSettings} />
          <div id="options-container" className="px-10 my-3 !pb-10">
            <MenuOption icon={TbUser}>Edit Profile</MenuOption>
            <MenuOption icon={TbSelector}>Preferences</MenuOption>
            <MenuOption icon={TbLogout}>Logout</MenuOption>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MenuModal;
