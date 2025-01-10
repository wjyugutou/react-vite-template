import { create } from 'zustand'

export interface AuthRoute {
  routePath: string
  componentPath: string
  authCode?: string[]
}

export interface UserState {
  user: Record<string, unknown> | null
  permissions: unknown[]
  routes: AuthRoute[]
  setUser: (user: any) => void
  setPermissions: (permissions: any) => void
  setRoutes: (routes: AuthRoute[]) => void
  login: (user: any) => Promise<void>
}

export const useUserStore = create<UserState>(set => ({
  user: null,
  permissions: [],
  routes: [],
  setUser: (user: any) => set({ user }),
  setPermissions: (permissions: any) => set({ permissions }),
  setRoutes: (routes: AuthRoute[]) => set({ routes }),
  login: async (user: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    set({
      user,
      permissions: [],
      routes: [
        { routePath: 'home', componentPath: 'home' },
      ],
    })

    return Promise.resolve()
  },
}))
