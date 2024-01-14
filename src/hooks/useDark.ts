const isAppearanceTransition
  = typeof document !== 'undefined'
  // @ts-expect-error: Transition API
  && document.startViewTransition
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const setting = localStorage.getItem('appTheme') || 'auto'

export default function useDark() {
  const [dark, setDark] = useState(setting === 'dark' || (prefersDark && setting !== 'light'))

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useHtml('html', 'theme', dark ? 'dark' : 'light')

    localStorage.setItem('appTheme', dark ? 'dark' : 'light')
  }, [dark])

  function toggleDark(event: React.MouseEvent) {
    if (!isAppearanceTransition || !event) {
      setDark(!dark)
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )
    const transition = document.startViewTransition(() => {
      setDark(!dark)
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]

      document.documentElement.animate(
        {
          clipPath: dark ? clipPath.toReversed() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: dark
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      )
    })
  }

  return { dark, toggleDark }
}
