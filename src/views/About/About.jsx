import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div className="about-page">
      <Navbar />

      
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Ice Cream Paradise</h1>
          <p>Where Passion Meets Perfection in Every Scoop</p>
        </div>
      </section>

    
      <section className="story">
        <div className="container">
          <h2>Our Story</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                Founded in 2010 by ice cream enthusiasts Maria and John Rodriguez, Ice Cream Paradise
                began as a small family dream in a cozy corner shop. What started as a passion project
                quickly became a community favorite, known for our commitment to using only the finest,
                locally-sourced ingredients.
              </p>
              <p>
                Over the years, we've grown from a single location to serving thousands of happy customers
                daily. But our core values remain unchanged: quality, creativity, and bringing joy through
                exceptional ice cream experiences.
              </p>
            </div>
            <div className="story-image">
              <div className="placeholder-image">
                <span>🏪</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Quality Ingredients</h3>
              <p>
                We source the finest dairy products and natural ingredients from local farms,
                ensuring every scoop is made with care and quality.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎨</div>
              <h3>Creative Flavors</h3>
              <p>
                Our master ice cream artisans craft unique flavor combinations that push boundaries
                while honoring traditional favorites.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Community First</h3>
              <p>
                We're proud to be part of this community, supporting local events and creating
                memorable experiences for families and friends.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Customer Joy</h3>
              <p>
                Every smile from a satisfied customer is our greatest reward. We strive to make
                every visit a delightful experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h2>Our Craft</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Select Premium Ingredients</h3>
              <p>We carefully choose the best dairy, fruits, and flavorings from trusted local suppliers.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Artisan Preparation</h3>
              <p>Our skilled artisans blend and churn each batch by hand, ensuring perfect texture and taste.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Fresh Daily</h3>
              <p>Every morning, we prepare fresh batches to guarantee the best quality for our customers.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Serve with Love</h3>
              <p>Each scoop is served with pride and a smile, making every visit special.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <span>👩‍🍳</span>
              </div>
              <h3>Maria Rodriguez</h3>
              <p className="member-role">Founder & Head Artisan</p>
              <p>Maria's passion for ice cream started 20 years ago and continues to drive our innovation.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <span>👨‍🍳</span>
              </div>
              <h3>John Rodriguez</h3>
              <p className="member-role">Co-Founder & Operations</p>
              <p>John ensures everything runs smoothly so Maria can focus on creating amazing flavors.</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <span>👩‍🎨</span>
              </div>
              <h3>Sarah Chen</h3>
              <p className="member-role">Flavor Innovator</p>
              <p>Sarah experiments with unique flavor combinations that keep our menu exciting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Experience the Paradise Difference</h2>
          <p>Come visit us and discover why we're the community's favorite ice cream destination.</p>
          <button className="btn-primary">Visit Our Shop</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About
