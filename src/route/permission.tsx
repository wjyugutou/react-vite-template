import type { FC } from 'react'
import LazyLoad from '@/components/LazyLoad'

interface Props {
  path: string
  lazyFn: () => Promise<{ default: React.ComponentType<any> }>
}

const Permission: FC<Props> = ({ path, lazyFn }) => {
  // const random = Math.random()
  // console.log('random', random)

  // if (random > 0.8) {
  //   console.log('redirect', random)

  //   return <Navigate to='/login' />
  //   // redirect('/login', 401)
  //   // return null
  // }

  return <LazyLoad path={path} lazyFn={lazyFn} />
}

export default Permission
