import { type FC, Suspense } from 'react'

interface Props {
  path?: string
  lazyFn?: () => Promise<{ default: React.ComponentType<any> }>
}

const LazyLoad: FC<Props> = ({ path, lazyFn }) => {
  // console.log('LazyLoad', path)

  const Component = useMemo(() => {
    if (lazyFn)
      return lazy(lazyFn)
    return lazy(() => import(`@/pages/${path}`))
  }, [path, lazyFn])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  )
}

export default LazyLoad
