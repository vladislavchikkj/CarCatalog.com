import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { withAuth } from "../../../HOC/withAuth"
import { CarService } from "../../../services/car.service"
import CarItem from "../home/car-item/CarItem"
import { ICar } from "../../../types/car.interface"

// eslint-disable-next-line react-refresh/only-export-components
const CarDetail = () => {
  const { id } = useParams()
  const [car, setCar] = useState<ICar>({} as ICar)

  useEffect(() => {
    if (!id) return
    const fetchData = async () => {
      const data = await CarService.getById(id)
      setCar(data[0])
    }
    fetchData()
  }, [id])

  if (!car?.name) return <p>Loading...</p>

  return (
    <div>
      <Link to="/">Back</Link>
      <CarItem car={car} />
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default withAuth(CarDetail)
