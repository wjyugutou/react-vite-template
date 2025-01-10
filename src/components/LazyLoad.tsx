import { type FC, Suspense } from 'react'

interface Props {
  path?: string
  lazyFn?: () => Promise<{ default: React.ComponentType<any> }>
}

const LazyLoad: FC<Props> = ({ path }) => {
  // console.log('LazyLoad', path)

  const Component = useMemo(() => {
    return lazy(() => {
      return import(`@/pages/${path}.tsx`)
        .catch(() => import(`@/pages/${path}/index.tsx`))
        .catch(() => import(`@/pages/-404`))
    })
  }, [path])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  )
}

export default LazyLoad
