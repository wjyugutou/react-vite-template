import { ErrorComponent, type ErrorComponentProps } from '@tanstack/react-router'

interface Props extends ErrorComponentProps {

}

function ErrorBoundary(props: Props) {
  console.log(props)

  return (
    <div>
      <div>
        {props.error.message}
      </div>
      <div>
        {props.error.stack}
      </div>
    </div>
  )
}

export default ErrorBoundary
