// App.js - Light Theme Version
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="king-makers-app light-theme">
      <Header />
      <HeroSection />
      <Collections />
      <USPSection />
      <BestSellers />
      <LifestyleSection />
      <Reviews />
      <OfferSection />
      <SizeGuide />
      <FAQ />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-text">👑 KING MAKERS</span>
        </div>
        <nav className="nav">
          <a href="#collections">Collections</a>
          <a href="#best">Best Sellers</a>
          <a href="#why">Why Us</a>
          <a href="#reviews">Reviews</a>
        </nav>
        <div className="header-actions">
          <button className="cart-btn">🛒</button>
          <button className="menu-btn">☰</button>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Rule Every Step.</h1>
            <p className="hero-subtitle">
              Premium shoes designed for comfort, power, and style.
            </p>
            <div className="hero-buttons">
              <button className="cta-btn primary">Shop Now</button>
              <button className="cta-btn secondary">View Collection</button>
            </div>
            <div className="trust-badge">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="trust-text">Trusted by 50,000+ customers</span>
            </div>
          </div>
          <div className="hero-image">
            <div className="shoe-image-placeholder">
              <div className="shoe-image-container">
                <img width="400px" height="450px" src="https://res.cloudinary.com/dxpbxhr3o/image/upload/v1765778034/img_vtxdx1.avif" alt="" />
                <div className="floating-badge">Premium Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Collections Section
function Collections() {
  const categories = ['Running', 'Formal', 'Casual', 'Sports', 'Premium'];
  
  const shoes = [
    { id: 1, name: 'King Runner Pro', category: 'Running', price: '₹4,999', rating: 4.8, color: '#0F0F0F' },
    { id: 2, name: 'Royal Formal', category: 'Formal', price: '₹6,999', rating: 4.9, color: '#C9A227' },
    { id: 3, name: 'Urban Walker', category: 'Casual', price: '₹3,999', rating: 4.7, color: '#1E40AF' },
    { id: 4, name: 'Athlete Pro', category: 'Sports', price: '₹5,499', rating: 4.8, color: '#DC2626' },
    { id: 5, name: 'Imperial Luxe', category: 'Premium', price: '₹9,999', rating: 5.0, color: '#C9A227' },
  ];

  return (
    <section id="collections" className="collections">
      <div className="container">
        <h2 className="section-title">Our Collections</h2>
        <div className="category-tabs">
          {categories.map(cat => (
            <button key={cat} className="category-tab">{cat}</button>
          ))}
        </div>
        <div className="shoe-grid">
          {shoes.map(shoe => (
            <div key={shoe.id} className="shoe-card">
              <div className="shoe-image">
                <div className="shoe-img-placeholder">👟</div>
                <div className="sale-badge">-20%</div>
                <button className="add-to-cart-btn">+ Add to Cart</button>
              </div>
              <div className="shoe-info">
                <h3>{shoe.name}</h3>
                <div className="shoe-meta">
                  <span className="price">{shoe.price}</span>
                  <span className="rating">⭐ {shoe.rating}</span>
                </div>
                <div className="color-dots">
                  <span className="color-dot" style={{backgroundColor: shoe.color}}></span>
                  <span className="color-dot" style={{backgroundColor: '#666'}}></span>
                  <span className="color-dot" style={{backgroundColor: '#fff', border: '1px solid #ddd'}}></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// USP Section
function USPSection() {
  const features = [
    { icon: '👑', title: 'Royal Comfort', desc: 'Memory foam cushioning' },
    { icon: '🦶', title: 'Perfect Fit', desc: 'Ergonomic design' },
    { icon: '🛡️', title: 'Premium Material', desc: 'Long-lasting quality' },
    { icon: '🌬️', title: 'Breathable', desc: 'All-day comfort' },
    { icon: '🔥', title: 'Stylish Look', desc: 'Modern & bold design' },
  ];

  return (
    <section id="why" className="usp-section">
      <div className="container">
        <h2 className="section-title">Why Choose King Makers?</h2>
        <div className="features-grid">
          {features.map(feat => (
            <div key={feat.title} className="feature-card">
              <div className="feature-icon">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Best Sellers
function BestSellers() {
  const bestSellers = [
    { id: 1, name: 'King Runner Pro', price: '₹4,999', badge: true, color: '#0F0F0F' },
    { id: 2, name: 'Imperial Luxe', price: '₹9,999', badge: true, color: '#C9A227' },
    { id: 3, name: 'Urban Walker', price: '₹3,999', badge: true, color: '#1E40AF' },
  ];

  return (
    <section id="best" className="best-sellers">
      <div className="container">
        <h2 className="section-title">Best Sellers 👑</h2>
        <div className="best-sellers-grid">
          {bestSellers.map(item => (
            <div key={item.id} className="best-seller-card">
              {item.badge && <div className="best-seller-badge">Best Seller</div>}
              <div className="best-seller-image" style={{backgroundColor: `${item.color}10`}}>
                <div className="shoe-img-placeholder">👑</div>
              </div>
              <div className="best-seller-info">
                <h3>{item.name}</h3>
                <div className="best-seller-price">{item.price}</div>
                <button className="quick-buy-btn">Quick Buy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Lifestyle Section
function LifestyleSection() {
  return (
    <section className="lifestyle">
      <div className="container">
        <div className="lifestyle-content">
          <div className="lifestyle-text">
            <h2 className="section-title">Style Meets Comfort</h2>
            <p className="lifestyle-quote">
              Designed for everyday hustle and special occasions.<br />
              <strong>Walk with confidence. Walk like a king.</strong>
            </p>
            <button className="cta-btn primary">Explore Collection</button>
          </div>
          <div className="lifestyle-images">
            <div className="lifestyle-img" style={{background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)'}}>
              🏃‍♂️
              <div className="img-label">Active Lifestyle</div>
            </div>
            <div className="lifestyle-img" style={{background: 'linear-gradient(135deg, #DBEAFE, #93C5FD)'}}>
              👞
              <div className="img-label">Formal Elegance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reviews Section
function Reviews() {
  const reviews = [
    { id: 1, name: 'Rahul, Chennai', rating: 5, comment: 'The comfort is unbelievable. Looks premium!', avatar: '👨‍💼' },
    { id: 2, name: 'Priya, Mumbai', rating: 5, comment: 'Best shoes I have ever owned. Worth every penny!', avatar: '👩‍💼' },
    { id: 3, name: 'Arjun, Delhi', rating: 5, comment: 'Perfect fit and amazing quality. Highly recommended!', avatar: '👨‍🔧' },
  ];

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-avatar">{review.avatar}</div>
                <div>
                  <div className="stars">{"⭐".repeat(review.rating)}</div>
                  <p className="reviewer">{review.name}</p>
                </div>
              </div>
              <p className="review-text">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Offer Section
function OfferSection() {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer-content">
          <div className="offer-badge">🎉 LIMITED TIME OFFER</div>
          <h2 className="offer-title">FLAT 25% OFF</h2>
          <p className="offer-details">Free Delivery | Easy Returns | 30-Day Exchange</p>
          <div className="countdown">
            <div className="countdown-item">
              <span className="countdown-number">02</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">12</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">45</span>
              <span className="countdown-label">Minutes</span>
            </div>
          </div>
          <button className="cta-btn primary large">Shop the Sale</button>
        </div>
      </div>
    </section>
  );
}

// Size Guide
function SizeGuide() {
  const sizes = [6, 7, 8, 9, 10, 11, 12];
  
  return (
    <section className="size-guide">
      <div className="container">
        <h2 className="section-title">Find Your Perfect Fit</h2>
        <div className="size-guide-content">
          <div className="size-chart">
            <h3>Size Chart</h3>
            <div className="size-grid">
              {sizes.map(size => (
                <button key={size} className="size-btn">{size}</button>
              ))}
            </div>
            <div className="fit-types">
              <button className="fit-btn active">Regular</button>
              <button className="fit-btn">Wide</button>
              <button className="fit-btn">Extra Wide</button>
            </div>
          </div>
          <div className="fit-support">
            <div className="support-icon">👑</div>
            <h3>Confused about size?</h3>
            <p>Our experts will help you find the perfect fit. We offer free size exchanges within 30 days.</p>
            <button className="support-btn">Get Fit Advice</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  const faqs = [
    { q: 'Is COD available?', a: 'Yes, Cash on Delivery is available for all orders.' },
    { q: 'What is your return policy?', a: '30-day easy returns with no questions asked.' },
    { q: 'What is the delivery time?', a: '2-5 business days across India.' },
    { q: 'How do I care for my shoes?', a: 'Use a soft cloth for cleaning. Avoid machine wash.' },
    { q: 'Do you offer international shipping?', a: 'Yes, we ship worldwide.' },
  ];

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="logo-text">👑 KING MAKERS</h3>
            <p className="tagline">Crafted for Kings. Worn by Legends.</p>
          </div>
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Shop</h4>
              <a href="#collections">Collections</a>
              <a href="#best">Best Sellers</a>
              <a href="#new">New Arrivals</a>
              <a href="#sale">Sale</a>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <a href="/contact">Contact Us</a>
              <a href="/size">Size Guide</a>
              <a href="/shipping">Shipping</a>
              <a href="/returns">Returns</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="/about">About Us</a>
              <a href="/careers">Careers</a>
              <a href="/stores">Store Locations</a>
              <a href="/press">Press</a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-social">
              <span className="social-icon">📱</span>
              <span className="social-icon">📘</span>
              <span className="social-icon">📷</span>
              <span className="social-icon">🐦</span>
            </div>
            <div className="footer-legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <span>Contact: support@kingmakers.com</span>
            </div>
            <div className="footer-copyright">
              © 2024 KING MAKERS. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;