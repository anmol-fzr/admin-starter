import { registerStore } from "@/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from 'zustand/middleware';
import { ICreds, IAuthStore } from "./types";

const creds: ICreds = {
  isLogin: false,
  token: null,
  username: null,
  email: null,
}

const name = "useAuthStore"

const storage = createJSONStorage(() => localStorage); // Use localStorage for persistence

const useAuthStore = create<IAuthStore>()(
  persist(
    (set, get) => ({
      creds,
      resetCreds: () => set({ creds }),
      updateCreds: (creds) => set({ creds: { ...get().creds, ...creds } }),
    }),
    { name, storage },
  ),
);

registerStore(useAuthStore, name);

export { useAuthStore };
