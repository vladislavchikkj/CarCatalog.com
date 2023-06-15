import { useState } from "react"
import { useForm } from "react-hook-form"
import styles from "./CreateCar.module.css"
import ErrorMessage from "./ErrorMessage"
import { useCreateCar } from "./useCreateCar"

const CreateCarForm = () => {
  const [data] = useState()

  const { register, reset, handleSubmit, errors } = useForm({
    mode: "onChange",
    defaultValues: data,
  })

  const { createCar } = useCreateCar(reset)
  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input placeholder="Name" {...register("name", { required: true })} />
      <ErrorMessage error={errors?.name?.message} />
      <input placeholder="Price" {...register("price", { required: true })} />
      <input placeholder="Image" {...register("image", { required: true })} />
      <button className="btn">Create</button>
    </form>
  )
}

export default CreateCarForm
