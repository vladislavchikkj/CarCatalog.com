import CreateCarForm from "./create-car-form/CreateCarForm"
import CarItem from "./car-item/CarItem.jsx"
import { useContext, useEffect, useState } from "react"
import { CarService } from "../../../services/car.service"
import { AuthContext } from "../../../providers/AuthProvider"

function Home() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll()
      setCars(data)
    }
    fetchData()
  }, [])

  const {user, setUser} = useContext(AuthContext)

  return (
    <div>
      <h1>Cars catalog</h1>

      {user ? (
      <>
        <h2>
          welcome, {user.name}!
        </h2>
        <button onClick={() => setUser(null)}>logout</button>
      </>
      ) : (
            <button onClick={() => 
              setUser({
                name: 'Max',
            })
          }
        >
          login
        </button>
      )}

      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  )
};

export default Home
