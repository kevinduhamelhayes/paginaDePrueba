import "./StylesRoutes/servicepage.css"

export default function ServicesPage() {
  return (
    <div className="services">
      <div className="services-top">
        <h1 className="tittle-services">Services</h1>
        <p className="p-top-services">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          itaque cum velit, nisi explicabo saepe distinctio provident, hic
          reiciendis sed consectetur architecto optio! Quasi iure sit ratione
          quia culpa quam quod possimus.
        </p>
      </div>
      <div className="cards-left">
        <figure className="figure-left">
          <img src="./public/card-left.svg" alt="" />
        </figure>
        <div className="card-container-left">
          <h2>Product Launch</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            reprehenderit quae ab natus aperiam hic itaque eos fugit accusamus,
            debitis provident explicabo blanditiis. Magni?
          </p>
          <button> read more </button>
        </div>
        <div className="cards-rigth">
          <figure className="figure-right">
            <img src="./public/card-rigth.svg" alt="" />
          </figure>
          <div className="card-container-rigth">
            <h2>Product Launch</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              reprehenderit quae ab natus aperiam hic itaque eos fugit
              accusamus, debitis provident explicabo blanditiis. Magni?
            </p>
            <button> read more </button>
          </div>
        </div>
      </div>{" "}
    </div>
  )
}
