import Permission from '@/route/permission'
import { createRootRoute, type FileRouteTypes, Outlet } from '@tanstack/react-router'

const whiteList: (FileRouteTypes['to'])[] = ['/login']

export const Route = createRootRoute({
  component: RootComponent,
  async loader() {
    const pathname = location.pathname as FileRouteTypes['to']
    if (whiteList.includes(pathname))
      return Promise.resolve(true)

    // 判断登录状态
    return await new Promise(resolve => setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(false)
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
