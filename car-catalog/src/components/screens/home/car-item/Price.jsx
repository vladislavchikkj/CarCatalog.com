const Price = ({price}) => {
  return (
    <p>
    {new Intl.NumberFormat("ru-Ru", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "narrowSymbol",
    }).format(price)}
  </p>
  )
}

export default Price
