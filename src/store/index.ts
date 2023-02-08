import { create } from 'zustand';
import { ColorMode } from '@/types';

export interface GlobalState {
  menuOpen: boolean;
  toggleMenu: (nextValue?: boolean) => void;
  colorMode: ColorMode | null;
  setColorMode: (colorMode: ColorMode) => void;
}

export const useGlobalState = create<GlobalState>()((set, get) => ({
  menuOpen: false,
  toggleMenu: (nextValue) =>
    set((state) => ({ menuOpen: nextValue ?? !state.menuOpen })),
  colorMode: null,
  setColorMode: (colorMode) => set({ colorMode: colorMode }),
}));
