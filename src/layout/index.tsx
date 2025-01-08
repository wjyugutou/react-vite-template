import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Layout: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  console.log('location', location)

  // if (!loaderData) {
  //   navigate({
  //     pathname: '/login',
  //     search: `?redirect=${location.pathname}`,
  //   }, {
  //     replace: true,
  //   })

  //   return null
  // }

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Layout</h1>
      <button className='text-blue-500 hover:text-blue-700' type='button' onClick={() => navigate('/login', { replace: true })}>
        login
      </button>
      <Outlet />
    </div>
  )
}

export default Layout
