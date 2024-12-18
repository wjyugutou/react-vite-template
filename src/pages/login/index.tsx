import type { FC } from 'react'

const Login: FC = () => {
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
      navigate('/home', { replace: true })
    })
  }

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <button className='rounded-md bg-blue-500 p-2 text-white hover:bg-blue-700' onClick={handleLogin}>
        Login {loading ? 'Loading...' : ''}
      </button>
    </div>
  )
}

export default Login
