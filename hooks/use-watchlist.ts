"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WatchlistStore {
  items: number[];
  addToWatchlist: (movieId: number) => void;
  removeFromWatchlist: (movieId: number) => void;
  isInWatchlist: (movieId: number) => boolean;
}

export const useWatchlist = create<WatchlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToWatchlist: (movieId) => 
        set((state) => ({
          items: [...state.items, movieId]
        })),
      removeFromWatchlist: (movieId) =>
        set((state) => ({
          items: state.items.filter((id) => id !== movieId)
        })),
      isInWatchlist: (movieId) =>
        get().items.includes(movieId),
    }),
    {
      name: 'watchlist-storage',
    }
  )
);