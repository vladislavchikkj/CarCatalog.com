import PropTypes from "prop-types"
import styles from "../Home.module.css"

function CarItem({ car }) {
  return (
    <div key={car.id} className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${car.image})`,
        }}
      ></div>
      <div className={styles.info}>
        <h2>{car.name}</h2>
        <p>
          {new Intl.NumberFormat("ru-Ru", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "narrowSymbol",
          }).format(car.price)}
        </p>
        <button>Read more</button>
      </div>
    </div>
  )
}
CarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}
export default CarItem
