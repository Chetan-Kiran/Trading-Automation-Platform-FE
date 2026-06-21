import { create } from "zustand";

interface AuthState {
  token: string | null;
  username: string | null;
  login: (token: string, username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  // Initializes state on boot directly from local storage
  token: localStorage.getItem("token"),
  username: localStorage.getItem("username"),

  login: (token, username) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    set({ token, username });
  },

  logout: () => {
    localStorage.clear();
    set({ token: null, username: null });
  },
}));
