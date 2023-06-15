import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { CarService } from "../../../../services/car.service"
import styles from "./CreateCar.module.css"

// eslint-disable-next-line react/prop-types
const CreateCarForm = () => {
  const [data] = useState()

  const { register, reset, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: data,
  })

  const queryClient = useQueryClient()

  const { mutate } = useMutation(
    ["create car"],
    (data) => CarService.create(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cars")
        reset()
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
  const createCar = (data) => {
    console.log(data)
    mutate(data)
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input placeholder="Name" {...register("name", { required: true })} />
      <input placeholder="Price" {...register("price", { required: true })} />
      <input placeholder="Image" {...register("image", { required: true })} />

      <button className="btn">Create</button>
    </form>
  )
}

export default CreateCarForm
