import { create } from 'zustand';
import { ColorMode } from '@/types';

export interface GlobalState {
  menuOpen: boolean;
  toggleMenu: (nextValue?: boolean) => void;
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
}

export const useGlobalState = create<GlobalState>()((set) => ({
  menuOpen: false,
  toggleMenu: (nextValue) =>
    set((state) => ({ menuOpen: nextValue ?? !state.menuOpen })),
  colorMode: 'system',
  setColorMode: (colorMode) => set({ colorMode: colorMode }),
}));
