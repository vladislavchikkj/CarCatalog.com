import CreateCarForm from "./create-car-form/CreateCarForm"
import CarItem from "./car-item/CarItem.jsx"
import { useContext } from "react"
import { CarService } from "../../../services/car.service"
import { AuthContext } from "../../../providers/AuthProvider"
import { useQuery } from "@tanstack/react-query"

function Home() {
  const { user, setUser } = useContext(AuthContext)
  const { data, isLoading } = useQuery(["cars"], () => CarService.getAll())

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <h1>Cars catalog</h1>

      {user ? (
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
      )}

      <CreateCarForm />
      <div>
        {data.length ? (
          data.map((car) => {
            if (car.name && car.image && car.price) {
              return <CarItem key={car.id} car={car} />
            }
            return null
          })
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  )
}

export default Home
