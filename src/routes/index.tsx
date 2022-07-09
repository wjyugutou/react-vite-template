import type { RouteObject } from 'react-router-dom'
import syncElement from './syncElement'

const routes: RouteObject[] = [
  {
    path: '/',
    element: syncElement('@/pages'),
  }, {
    path: '/hi/:name',
    element: syncElement('@/pages/hi'),
  }, {
    path: '/hi',
    element: syncElement('@/pages/hi'),
  },
]
export default routes
