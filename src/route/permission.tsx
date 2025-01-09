import type { FC } from 'react'
import { Navigate, useLoaderData, useLocation } from '@tanstack/react-router'

interface Props {
  children: React.ReactNode
}

const Permission: FC<Props> = ({ children }) => {
  const location = useLocation()
  const routeLoaderData = useLoaderData({ from: '__root__' })

  const search = {
    redirect: location.pathname,
  }

  if (!routeLoaderData && location.pathname !== '/login') {
    return <Navigate to="/login" replace search={search} />
  }

  return children
}

export default Permission
