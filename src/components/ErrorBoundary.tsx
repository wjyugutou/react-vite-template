function ErrorBoundary() {
  const error = useRouteError()

  console.log(error)

  return <div>ErrorBoundary</div>
}

export default ErrorBoundary
