import { create } from "zustand";

export type menuStoreType = {
  menuOpen: boolean;
  toggleMenu: () => void;
};

const useMenuStore = create<menuStoreType>((set) => ({
  menuOpen: false,
  toggleMenu: () =>
    set((prevState: any) => ({ menuOpen: !prevState.menuOpen })),
}));

export default useMenuStore;
