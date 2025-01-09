import Permission from '@/route/permission'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
  async loader() {
    return await new Promise(resolve => setTimeout(() => {
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
