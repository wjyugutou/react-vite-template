import type { AuthRoute } from '@/store/user'
import type { RouteObject } from 'react-router-dom'
import ErrorBoundary from '@/components/ErrorBoundary'
import Layout from '@/layout'
import NotFound from '@/pages/404'
import Login from '@/pages/login'
import { createBrowserRouter } from 'react-router-dom'
import Permission from './permission'

// 打包时避免tree-shaking
const pages = import.meta.glob<{ default: React.ComponentType<any> }>(['@/pages/**/*.tsx', '!**/components/**'])

function getComponent(path: string) {
  const module = pages[`/src/pages/${path}.tsx`] || pages[`/src/pages/${path}/index.tsx`]

  return module
}

export function createRoutes(routes: AuthRoute[]): RouteObject[] {
  const children = routes.map(route => ({
    id: route.routePath,
    path: route.routePath,
    loader: () => {
      return true
    },
    errorElement: <ErrorBoundary />,
    element: <Permission path={route.routePath} lazyFn={getComponent(route.routePath)} />,
    children: [
      {
        errorElement: <ErrorBoundary />,
        path: '',
        element: <div>123</div>,
      },
    ],
  }))

  return [
    {
      path: '/',
      id: 'layout',
      element: <Layout />,
      children,
    },
    {
      path: '/login',
      id: 'login',
      element: <Login />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]
}

function generatorRoutes(_routes: AuthRoute[]) {
  const routes = createRoutes(_routes)
  const router = createBrowserRouter(routes)

  return router
}

export default generatorRoutes
