import CreateCarForm from "./create-car-form/CreateCarForm"
import CarItem from "./car-item/CarItem.jsx"
import { cars } from "./card.data"

function Home() {
  return (
    <div>
      <h1>Cars catalog</h1>
      <CreateCarForm />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  )
}

export default Home
