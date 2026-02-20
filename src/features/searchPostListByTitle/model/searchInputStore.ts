import { create } from "zustand";
import { StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

interface SearchInputState {
  input: string;
}

interface SearchInputAction {
  initialize: () => void;
  setSearchInputState: (date: Partial<SearchInputState>) => void;
}

const initialState: SearchInputState = {
  input: "",
};

type SearchInputStoreType = SearchInputState & SearchInputAction;

const searchInputStore: StateCreator<SearchInputStoreType> = (set) => ({
  ...initialState,
  initialize: () => set({ ...initialState }),
  setSearchInputState: (data: Partial<SearchInputState>) =>
    set(() => ({ ...data })),
});

export const useSearchInputStore = create<SearchInputStoreType>(
  process.env.NODE_ENV === "development"
    ? (devtools(searchInputStore) as StateCreator<SearchInputStoreType>)
    : searchInputStore,
);
