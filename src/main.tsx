import { createRouter, RouterProvider } from '@tanstack/react-router'

import ReactDOM from 'react-dom/client'
import NotFound from './pages/-404'
// Import the generated route tree

import { routeTree } from './routeTree.gen'

import '@unocss/reset/tailwind.css'

import 'virtual:uno.css'
import './styles/index.css'

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultErrorComponent: ErrorBoundary,
  defaultNotFoundComponent: NotFound,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
