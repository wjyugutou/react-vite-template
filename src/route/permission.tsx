import type { FC } from 'react'
import { Navigate, redirect, useLoaderData, useLocation } from '@tanstack/react-router'

interface Props {
  children: React.ReactNode
}

const Permission: FC<Props> = ({ children }) => {
  const userStore = useUserStore()
  const location = useLocation()
  const routeLoaderData = useLoaderData({ from: '__root__' })


 
  if (!routeLoaderData) {
    return redirect({
      to: '/login',
    })
  }

  if (!userStore.user && location.pathname !== '/login') {
    return <Navigate to="/login" replace />
  }

  return children
}

export default Permission
