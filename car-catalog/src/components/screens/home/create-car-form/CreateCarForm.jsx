import { useState } from "react"
import styles from "./CreateCar.module.css"

const CreateCarForm = () => {
  const [name, setName] = useState("")
  const [price, setprice] = useState("")
  const [image, setimage] = useState("")

  const createCar = (e) => {
    e.preventDefault()
    console.log({ name, price, image })
  }
  return (
    <form className={styles.form}>
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        placeholder="Price"
        onChange={(e) => setprice(e.target.value)}
        value={price}
      />
      <input
        placeholder="Image"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />

      <button className="btn" onClick={(e) => createCar(e)}>
        Create
      </button>
    </form>
  )
}

export default CreateCarForm
