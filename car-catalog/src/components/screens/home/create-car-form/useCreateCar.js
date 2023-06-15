import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CarService } from "../../../../services/car.service"

export const useCreateCar = (reset) => {
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
  return { createCar }
}
