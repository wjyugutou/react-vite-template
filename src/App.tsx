import { createRoutes } from './route/generatorRoutes'
import Permission from './route/permission'

function App() {
  const { routes } = useUserStore()

  const router = useRoutes(createRoutes(routes))

  return <Permission>{router}</Permission>
}

export default App
