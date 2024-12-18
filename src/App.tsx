import { createRoutes } from './route/generatorRoutes'

function App() {
  const { routes } = useUserStore()

  const router = useRoutes(createRoutes(routes))

  return router
}

export default App
