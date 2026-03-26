import "./OurServices.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

function OurServices() {
  return (
    <div className="services-page">
      <Navbar />

      <section className="services-hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>From scoop shop favorites to special event catering, we serve sweetness in every way</p>
        </div>
      </section>

      <section className="main-services">
        <div className="container">
          <div className="services-grid">
            <div className="service-card featured">
              <div className="service-icon">🍨</div>
              <h3>Retail Ice Cream</h3>
              <p>Enjoy our premium ice cream in our cozy shop. Choose from our daily selection of house-made flavors, cones, cups, sundaes, and specialty treats.</p>
              <ul className="service-features">
                <li>30+ rotating flavors</li>
                <li>Fresh waffle cones</li>
                <li>Custom sundaes</li>
                <li>Kid-friendly portions</li>
              </ul>
              <Button>View Menu</Button>
            </div>

            <div className="service-card">
              <div className="service-icon">🎉</div>
              <h3>Event Catering</h3>
              <p>Make your special occasions unforgettable with our professional catering services. Perfect for birthdays, weddings, corporate events, and celebrations.</p>
              <ul className="service-features">
                <li>Custom flavor selections</li>
                <li>Professional service staff</li>
                <li>Equipment provided</li>
                <li>Setup and cleanup</li>
              </ul>
              <Button>Book Event</Button>
            </div>

            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Home Delivery</h3>
              <p>Can't make it to our shop? We'll bring the sweetness to you! Order online for convenient delivery or convenient pickup options.</p>
              <ul className="service-features">
                <li>Same-day delivery</li>
                <li>Online ordering</li>
                <li>Curbside pickup</li>
                <li>Contactless options</li>
              </ul>
              <Button>Order Online</Button>
            </div>

            <div className="service-card">
              <div className="service-icon">🎂</div>
              <h3>Custom Cakes & Desserts</h3>
              <p>Celebrate with our custom ice cream cakes, pies, and specialty desserts. Perfect for birthdays, anniversaries, and special occasions.</p>
              <ul className="service-features">
                <li>Custom designs</li>
                <li>Dietary accommodations</li>
                <li>Same-day service</li>
                <li>Advance ordering</li>
              </ul>
              <Button>Order Custom</Button>
            </div>

            <div className="service-card">
              <div className="service-icon">🏫</div>
              <h3>School & Group Programs</h3>
              <p>Educational tours, group visits, and special programs for schools, daycares, and youth organizations. Learn about ice cream making!</p>
              <ul className="service-features">
                <li>Educational tours</li>
                <li>Group discounts</li>
                <li>Custom activities</li>
                <li>Advance reservations</li>
              </ul>
              <Button>Schedule Tour</Button>
            </div>

            <div className="service-card">
              <div className="service-icon">🏪</div>
              <h3>Wholesale & Bulk Orders</h3>
              <p>Supply your business with our premium ice cream. Perfect for restaurants, cafes, hotels, and retail establishments.</p>
              <ul className="service-features">
                <li>Bulk pricing</li>
                <li>Custom packaging</li>
                <li>Delivery service</li>
                <li>Flexible ordering</li>
              </ul>
              <Button>Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="packages">
        <div className="container">
          <h2>Special Packages</h2>
          <div className="packages-grid">
            <div className="package-card">
              <h3>Birthday Party Package</h3>
              <div className="package-price">$15/person</div>
              <ul>
                <li>Choice of 3 ice cream flavors</li>
                <li>Decorated cake option (+$50)</li>
                <li>Party hats and decorations</li>
                <li>Private party room (2 hours)</li>
                <li>Staff supervision included</li>
              </ul>
              <Button>Book Party</Button>
            </div>

            <div className="package-card">
              <h3>Wedding Dessert Bar</h3>
              <div className="package-price">$25/person</div>
              <ul>
                <li>5 premium ice cream flavors</li>
                <li>Custom wedding cake</li>
                <li>Chocolate fountain station</li>
                <li>Professional servers</li>
                <li>Complete setup and service</li>
              </ul>
              <Button>Inquire Now</Button>
            </div>

            <div className="package-card">
              <h3>Corporate Event Package</h3>
              <div className="package-price">$20/person</div>
              <ul>
                <li>4 seasonal ice cream flavors</li>
                <li>Custom branded cups</li>
                <li>On-site service staff</li>
                <li>Dietary accommodation</li>
                <li>Flexible scheduling</li>
              </ul>
              <Button>Corporate Inquiry</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Ice Cream Paradise?</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">⭐</div>
              <h4>Premium Quality</h4>
              <p>All ingredients are carefully selected and sourced locally whenever possible.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">👨‍🍳</div>
              <h4>Expert Craftsmanship</h4>
              <p>Our master ice cream makers have decades of experience perfecting their art.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🚚</div>
              <h4>Reliable Service</h4>
              <p>We pride ourselves on punctual delivery and professional service every time.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🌱</div>
              <h4>Sustainable Practices</h4>
              <p>Committed to eco-friendly packaging and supporting local farmers.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🎯</div>
              <h4>Custom Solutions</h4>
              <p>Every event and order is tailored to meet your specific needs and preferences.</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">💝</div>
              <h4>Community Focused</h4>
              <p>Supporting local events and creating sweet memories for our community.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Ready to Experience Our Services?</h2>
          <p>Contact us today to discuss your needs and let us create something special for you.</p>
          <div className="cta-buttons">
            <Button>Get Quote</Button>
            <Button>Call Now: (555) 123-SCOOP</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default OurServices
