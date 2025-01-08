import type { AuthRoute } from '@/store/user'
import type { RouteObject } from 'react-router-dom'
import ErrorBoundary from '@/components/ErrorBoundary'
import Layout from '@/layout'
import NotFound from '@/pages/404'
import Login from '@/pages/login'
import { createBrowserRouter } from 'react-router-dom'

export function createRoutes(routes: AuthRoute[]): RouteObject[] {
  const children = routes.map(route => ({
    id: route.routePath,
    path: route.routePath,
    errorElement: <ErrorBoundary />,
    element: <LazyLoad path={route.routePath} />,
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
