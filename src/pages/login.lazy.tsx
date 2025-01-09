import {
  createLazyFileRoute,
  type FileRouteTypes,
  useNavigate,
} from '@tanstack/react-router'

interface Search {
  redirect: FileRouteTypes['to']
}

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

function Login() {
  const searchData = Route.useSearch() as Search
  const navigate = useNavigate()
  const userStore = useUserStore()
  const [loading, startTransition] = useTransition()

  async function handleLogin() {
    if (loading)
      return
    startTransition(async () => {
      await userStore.login({
        name: 'admin',
      })

      navigate({
        to: searchData.redirect || '/home',
        replace: true,
      })
    })
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <button
        className="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-700"
        onClick={handleLogin}
      >
        Login
        {loading ? 'Loading...' : ''}
      </button>
    </div>
  )
}
