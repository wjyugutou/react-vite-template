import type { FC } from 'react'

interface Props {
  children: React.ReactNode
}

const Permission: FC<Props> = ({ children }) => {
  const userStore = useUserStore()
  const location = useLocation()
  console.log(userStore.user)
  console.log(location)

  if (!userStore.user && location.pathname !== '/login') {
    return <Navigate to='/login' replace />
  }

  return children
}

export default Permission
