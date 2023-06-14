import { useState } from "react"
import styles from "./CreateCar.module.css"

const clearData = {
  price: "",
  name: "",
  image: "",
}

// eslint-disable-next-line react/prop-types
const CreateCarForm = ({ setCars }) => {
  const [data, setData] = useState(clearData)

  const createCar = (e) => {
    e.preventDefault()
    setCars((prev) => [
      {
        id: prev.length + 1,
        ...data,
      },
      ...prev,
    ])
    setData(clearData)
  }
  return (
    <form className={styles.form}>
      <input
        placeholder="Name"
        onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
        value={data.name}
      />
      <input
        placeholder="Price"
        onChange={(e) =>
          setData((prev) => ({ ...prev, price: e.target.value }))
        }
        value={data.price}
      />
      <input
        placeholder="Image"
        onChange={(e) =>
          setData((prev) => ({ ...prev, image: e.target.value }))
        }
        value={data.image}
      />

      <button className="btn" onClick={(e) => createCar(e)}>
        Create
      </button>
    </form>
  )
}

export default CreateCarForm
