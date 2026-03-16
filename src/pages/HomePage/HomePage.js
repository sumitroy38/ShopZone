import React from 'react';
import { useNavigate } from 'react-router-dom';
import Categories from '../../components/Categories/Categories';
import ProductList from '../../components/ProductList/ProductList';
import { products } from '../../data/products';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const featured = products.slice(0, 4);
  const trending = products.slice(2, 6);

  return (
    <main className="page-enter">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">✨ New Season Sale — Up to 60% Off</div>
            <h1 className="hero-title">
              Your One-Stop<br />
              <span>Multi-Category</span><br />
              Shopping Destination
            </h1>
            <p className="hero-desc">
              Explore thousands of products across electronics, fashion, beauty, home & more.
              Best prices, fast delivery, guaranteed.
            </p>
            <div className="hero-cta">
              <button className="btn-primary" onClick={() => navigate('/products')}>
                Shop Now →
              </button>
              <button className="btn-outline" onClick={() => navigate('/products')} style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                View Deals
              </button>
            </div>
            <div className="hero-stats">
              {[['50K+', 'Products'], ['1M+', 'Customers'], ['4.8★', 'Rating']].map(([num, label]) => (
                <div key={label}>
                  <div className="hero-stat-num">{num}</div>
                  <div className="hero-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            {products.slice(0, 4).map(p => (
              <div key={p.id} className="hero-img-card">
                <img src={p.image} alt={p.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="promo-banner" style={{ marginTop: 40 }}>
          <div>
            <p className="promo-tag">Flash Sale · Ends Tonight</p>
            <h2 className="promo-title">Get Extra 20% Off on Electronics</h2>
            <p className="promo-desc">Use code <strong style={{ color: 'var(--accent)' }}>FLASH20</strong> at checkout</p>
          </div>
          <button className="btn-primary" onClick={() => navigate('/products?category=electronics')}>
            Grab the Deal →
          </button>
        </div>
      </div>

      <section className="home-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Shop by Category</h2>
              <p className="section-subtitle">Find exactly what you're looking for</p>
            </div>
            <button className="section-view-all" onClick={() => navigate('/products')}>View All →</button>
          </div>
          <Categories />
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">Handpicked deals just for you</p>
            </div>
            <button className="section-view-all" onClick={() => navigate('/products')}>View All →</button>
          </div>
          <ProductList products={featured} />
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Trending Now 🔥</h2>
              <p className="section-subtitle">What everyone's buying this week</p>
            </div>
            <button className="section-view-all" onClick={() => navigate('/products')}>View All →</button>
          </div>
          <ProductList products={trending} />
        </div>
      </section>

      <footer style={{ background: 'var(--primary)', color: 'rgba(255,255,255,0.6)', textAlign: 'center', padding: '20px', fontSize: '0.85rem' }}>
        © 2024 ShopZone · All rights reserved
      </footer>
    </main>
  );
}

export default HomePage;
