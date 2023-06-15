const ErrorMessage = ({ error }) => {
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
