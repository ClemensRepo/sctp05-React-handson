import React from "react"
import "./style.css"

function App() {
  
  
  return (
    <>
    <header>
      <nav>
        <div className="logo">Wanderlust</div>
        <ul>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section className="hero">
        <h1>Discover Your Next Adventure</h1>
        <p>Explore the world with our curated travel experiences</p>
        <button className="cta-button">Start Planning</button>
      </section>

      <section id="destinations" className="destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-grid">
          <div className="destination-card">
            <img src="https://placehold.co/400x300" alt="Tropical Beach"/>
            <h3>Tropical Paradise</h3>
            <p>Experience pristine beaches and crystal-clear waters</p>
          </div>
          <div className="destination-card">
            <img src="https://placehold.co/400x300" alt="Mountain Range"/>
            <h3>Mountain Escape</h3>
            <p>Breathtaking views and adventure await</p>
          </div>
          <div className="destination-card">
            <img src="https://placehold.co/400x300" alt="Historic City"/>
            <h3>Cultural Journey</h3>
            <p>Immerse yourself in history and tradition</p>
          </div>
        </div>
      </section>

      <section id="packages" className="packages">
        <h2>Featured Packages</h2>
        <div className="package-grid">
          <div className="package-card">
            <img src="https://placehold.co/500x300" alt="Luxury Resort"/>
            <div className="package-content">
              <h3>Luxury Getaway</h3>
              <p>7 days of pure relaxation</p>
              <span className="price">From $1,999</span>
            </div>
          </div>
          <div className="package-card">
            <img src="https://placehold.co/500x300" alt="Adventure Tour"/>
            <div className="package-content">
              <h3>Adventure Package</h3>
              <p>5 days of thrilling experiences</p>
              <span className="price">From $1,499</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>Why Choose Us</h2>
        <div className="features">
          <div className="feature">
            <h3>Expert Guides</h3>
            <p>Professional and knowledgeable travel experts</p>
          </div>
          <div className="feature">
            <h3>Best Value</h3>
            <p>Competitive prices and exclusive deals</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>Always here to help you</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <form>
            <input type="text" placeholder="Name" required/>
            <input type="email" placeholder="Email" required/>
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </main>

    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Wanderlust Travel</h3>
          <p>Making your travel dreams come true</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@wanderlust.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Wanderlust Travel. All rights reserved.</p>
      </div>
    </footer>
    </>

  );
}

export default App;