import { create } from 'zustand';
import { ColorMode } from '@/types';
import { PendapatKu } from '@/types/model';

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

export interface MyOpinionState {
  selectedOpinion: PendapatKu | null;
  setSelectedOpinion: (pendapatku: PendapatKu) => void;
  clearSelectedOpinion: () => void;
}

export const useOpinionState = create<MyOpinionState>()((set, get) => ({
  selectedOpinion: null,
  setSelectedOpinion: (pendapatku: PendapatKu) =>
    set({ selectedOpinion: pendapatku }),
  clearSelectedOpinion: () => set({ selectedOpinion: null }),
}));
