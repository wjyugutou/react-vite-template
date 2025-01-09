import { createLazyFileRoute, redirect, useNavigate, useParams } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/login/')({
  component: Login,
})

function Login() {
  const navigate = useNavigate()
  const userStore = useUserStore()
  const params = useParams({ from: '/login/' })
  const [loading, startTransition] = useTransition()

  async function handleLogin() {
    if (loading)
      return
    startTransition(async () => {
      await userStore.login({
        name: 'admin',
      })
      redirect({
        to,
      })
      navigate({
        to: '/home',
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
