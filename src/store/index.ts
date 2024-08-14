import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface NavigationState {
  category: string;
  setCategory: (category: string) => void;
}

export const useNavigationStore = create<NavigationState>()(
  devtools(
    persist(
      (set) => ({
        category: 'All',
        setCategory: (category) => set({ category }),
      }),
      { name: 'navigation-storage' }
    )
  )
);