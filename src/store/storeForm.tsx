import { create } from "zustand"

interface User {
    email: string,
    login: string,
    password: string,
    confirmPassword: string
}

interface StoreUser {
    users: User[],
    createUser: (user: User) => void
}

const useUserStore = create<StoreUser>()((set) => ({
    users: [],
    createUser: (user: User) => {
        set((state) => ({
            users: [...state.users, user]
        }))
    }
}))

export default useUserStore;