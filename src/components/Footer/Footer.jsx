import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-logo">
                <h3>🍨 Ice Cream Paradise</h3>
              </div>
              <p>
                Serving the community with premium, handcrafted ice cream made from the finest
                ingredients. Creating sweet memories since 2010.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook">
                  📘
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  📷
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  🐦
                </a>
                <a href="#" className="social-link" aria-label="TikTok">
                  🎵
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#menu">Menu</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#catering">Event Catering</a></li>
                <li><a href="#delivery">Home Delivery</a></li>
                <li><a href="#cakes">Custom Cakes</a></li>
                <li><a href="#wholesale">Wholesale</a></li>
                <li><a href="#parties">Party Packages</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>123 Sweet Street<br />Ice Cream City, IC 12345</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>(555) 123-SCOOP</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>hello@icecreamparadise.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <span>Mon-Sun: 10AM - 10PM</span>
                </div>
              </div>
            </div>

            <div className="footer-section newsletter-section">
              <h4>Stay Sweet</h4>
              <p>Subscribe to our newsletter for exclusive offers and flavor updates!</p>
              <div className="newsletter-signup">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2024 Ice Cream Paradise. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#accessibility">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
