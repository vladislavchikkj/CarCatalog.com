/* eslint-disable react/prop-types */
import CarItem from "../screens/home/car-item/CarItem"

const Catalog = ({ data }) => {
  return (
    <div>
      {data.length ? (
        data.map((car) => {
          return <CarItem key={car.id} car={car} />
        })
      ) : (
        <p>There are no cars</p>
      )}
    </div>
  )
}

export default Catalog
