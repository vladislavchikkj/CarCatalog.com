import { ComponentType, useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { JSX } from "react/jsx-runtime"

// eslint-disable-next-line react/display-name
export const withAuth =
  (Component: ComponentType) => (props: JSX.IntrinsicAttributes) => {
    const { user } = useContext(AuthContext)

    if (!user) return <p>You are not authorized to view this page</p>

    return <Component {...props} />
  }
