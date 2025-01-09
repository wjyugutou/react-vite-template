import type { FC } from 'react'
import { Navigate, redirect, useLoaderData, useLocation } from '@tanstack/react-router'

interface Props {
  children: React.ReactNode
}

const Permission: FC<Props> = ({ children }) => {
  const userStore = useUserStore()
  const location = useLocation()
  const routeLoaderData = useLoaderData({ from: '__root__' })

  const params = useMemo(() => {
    return { redirect: location.pathname }
  }, [])

  if (!routeLoaderData) {
    return <Navigate to="/login" params={params} replace />
  }

  if (!userStore.user && location.pathname !== '/login') {
    return <Navigate to="/login" params={params} replace />
  }

  return children
}

export default Permission
