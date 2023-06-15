import { FC } from "react"

const ErrorMessage: FC<{ error: string | undefined }> = ({ error }) => {
  if (!error) return null
  return (
    error && (
      <p
        style={{
          color: "red",
        }}
      >
        Name is required
      </p>
    )
  )
}

export default ErrorMessage
