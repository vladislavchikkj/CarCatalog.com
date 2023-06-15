import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CarService } from "../../../../services/car.service"
import { SubmitHandler, UseFormReset } from "react-hook-form"
import { ICarData } from "../../../../types/car.interface"

export const useCreateCar = (reset: UseFormReset<ICarData>) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(
    ["create car"],
    (data: ICarData) => CarService.create(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cars"])
        reset()
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )
  const createCar: SubmitHandler<ICarData> = (data) => {
    console.log(data)
    mutate(data)
  }
  return { createCar }
}
