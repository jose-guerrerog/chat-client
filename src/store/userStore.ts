import create from 'zustand'

interface User {
  username: string
  setUsername: (username: string) => void
}

export const useUserStore = create<User>( (set) => ({
  username: '',
  setUsername: (username: string ) => {
    set({ username })
  },
}));