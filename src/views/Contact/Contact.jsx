import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Get in touch with Ice Cream Paradise</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h3>Visit Our Shop</h3>
                  <p>123 Sweet Street<br />Ice Cream City, IC 12345</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h3>Call Us</h3>
                  <p>(555) 123-SCOOP<br />(555) 123-7267</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-content">
                  <h3>Email Us</h3>
                  <p>hello@icecreamparadise.com<br />orders@icecreamparadise.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-content">
                  <h3>Hours of Operation</h3>
                  <div className="hours">
                    <p><strong>Monday - Friday:</strong> 11:00 AM - 10:00 PM</p>
                    <p><strong>Saturday:</strong> 10:00 AM - 11:00 PM</p>
                    <p><strong>Sunday:</strong> 12:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🚗</div>
                <div className="info-content">
                  <h3>Parking</h3>
                  <p>Free parking available in our lot<br />Street parking also available</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="catering">Catering Request</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <span>🗺️</span>
              <p>Interactive Map Coming Soon</p>
              <p>123 Sweet Street, Ice Cream City, IC 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="additional-contact">
        <div className="container">
          <h2>Other Ways to Reach Us</h2>
          <div className="contact-methods">
            <div className="method">
              <div className="method-icon">📱</div>
              <h3>Follow Us</h3>
              <p>Stay updated with our latest flavors and events</p>
              <div className="social-links">
                <a href="#" className="social-link">📘 Facebook</a>
                <a href="#" className="social-link">📷 Instagram</a>
                <a href="#" className="social-link">🐦 Twitter</a>
              </div>
            </div>

            <div className="method">
              <div className="method-icon">📰</div>
              <h3>Newsletter</h3>
              <p>Subscribe to get exclusive offers and flavor announcements</p>
              <div className="newsletter-signup">
                <input type="email" placeholder="Enter your email" />
                <button className="btn-secondary">Subscribe</button>
              </div>
            </div>

            <div className="method">
              <div className="method-icon">🎉</div>
              <h3>Events & Catering</h3>
              <p>Planning a special event? We cater!</p>
              <p>Call us at (555) 123-SCOOP for details</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do you offer dairy-free options?</h3>
              <p>Yes! We have several dairy-free and vegan ice cream options available.</p>
            </div>

            <div className="faq-item">
              <h3>Can I place orders for pickup?</h3>
              <p>Absolutely! Call ahead or order online for faster service.</p>
            </div>

            <div className="faq-item">
              <h3>Do you cater events?</h3>
              <p>Yes, we provide catering services for parties, weddings, and corporate events.</p>
            </div>

            <div className="faq-item">
              <h3>Are your ingredients locally sourced?</h3>
              <p>We pride ourselves on using locally-sourced ingredients whenever possible.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact
