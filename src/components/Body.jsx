import "./styles/Body.css"

export default function Body() {
  return (
    <main className="home-main-container">
      <div className="hero-container">
        <h2 className="hero-title">Be Smart, Hire Sharp!</h2>
        <div className="hero-description-container">
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <button className="hero-button">Check out our Services</button>
        </div>
      </div>
      <div className="hero-buton-container">
        <figure className="figure-buton">
          <img
            className="hero-button-image"
            src="/public/image-hero-button.svg"
            alt="hero-button-image"
          />
        </figure>
        <section className="text-buton">
          <h2 className="hero-button-tittle">Whi us?</h2>
          <p className="text-bottom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta
            iure voluptates ullam aspernatur sint saepe rem beatae vero nulla
            reiciendis natus suscipit ducimus quidem tempora sit libero, aliquam
            expedita, corporis itaque nam molestiae dignissimos
          </p>
          <p className="text-bottom">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            aliquid consequatur enim rem ex, sapiente deleniti praesentium odio
            error odit harum quo itaque veritatis? Veniam atque praesentium,
            eius repudiandae inventore maiores ad. Quia, culpa voluptas? Culpa,
            itaque. Ea esse unde maxime placeat aliquid, tempore laboriosam,
            nostrum velit vero minima aperiam. Officiis rem perspiciatis nam.
          </p>
          <p className="text-bottom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            soluta sequi magni earum dolore vero corrupti temporibus nulla
            accusamus, esse sunt ducimus odio consequatur porro deleniti
            eligendi culpa, voluptates consequuntur repudiandae. Animi!
          </p>
        </section>
      </div>
    </main>
  )
}
