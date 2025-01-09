import Permission from '@/route/permission'
import { createRootRoute, Outlet, redirect, useLocation } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
  async loader() {
    // 判断登录状态
    return await new Promise(resolve => setTimeout(() => {
      if (Math.random() > 0.5) {
        redirect({
          to: '/login',
          params: { redirect: location.pathname },
        })
      }
      resolve(true)
    }, 1000))
  },
})

function RootComponent() {
  return (
    <Permission>
      <Outlet />
    </Permission>
  )
}
