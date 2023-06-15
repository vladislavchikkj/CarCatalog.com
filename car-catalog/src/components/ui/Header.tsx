import { useAuth } from "../../hooks/useAuth"

const Header = () => {
  const { user, setUser } = useAuth()
  return user ? (
    <>
      <h2>welcome, {user.name}!</h2>
      <button onClick={() => setUser(null)}>logout</button>
    </>
  ) : (
    <button
      onClick={() =>
        setUser({
          name: "Vlad",
        })
      }
    >
      login
    </button>
  )
}

export default Header
