import { FC } from "react"

const Price: FC<{ price: string }> = ({ price }) => {
  return (
    <p>
      {new Intl.NumberFormat("ru-Ru", {
        style: "currency",
        currency: "USD",
        currencyDisplay: "narrowSymbol",
      }).format(+price)}
    </p>
  )
}

export default Price
