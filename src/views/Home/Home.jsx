import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Ice Cream Paradise</h1>
          <p>Discover the most delicious ice cream flavors made with premium ingredients</p>
          <div className="hero-buttons">
            <button className="btn-primary">View Our Menu</button>
            <button className="btn-secondary">Find Us</button>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>About Our Ice Cream</h2>
          <p>
            At Ice Cream Paradise, we believe that great ice cream starts with the finest ingredients. 
            Our artisanal scoops are handcrafted daily using fresh, local dairy and the most exquisite flavors 
            from around the world. Whether you're craving classic vanilla or adventurous exotic combinations, 
            we have something to satisfy every sweet tooth.
          </p>
        </div>
      </section>

      <section className="featured">
        <div className="container">
          <h2>Featured Flavors</h2>
          <div className="flavors-grid">
            <div className="flavor-card">
              <h3>Vanilla Dream</h3>
              <p>Rich, creamy vanilla with hints of Madagascar vanilla beans</p>
            </div>
            <div className="flavor-card">
              <h3>Chocolate Heaven</h3>
              <p>Decadent dark chocolate with chocolate chunks</p>
            </div>
            <div className="flavor-card">
              <h3>Strawberry Bliss</h3>
              <p>Fresh strawberry puree with real strawberry pieces</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready for Some Sweetness?</h2>
          <p>Visit us today and treat yourself to the best ice cream in town!</p>
          <button className="btn-primary">Order Now</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
