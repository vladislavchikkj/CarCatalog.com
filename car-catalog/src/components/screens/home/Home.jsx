import { cars } from "./card.data"
import styles from "./Home.module.css"

function Home() {
  return (
    <div>
      <h1>Cars catalog</h1>
      <div>
        {cars.map((car) => (
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
        ))}
      </div>
    </div>
  )
}

export default Home
