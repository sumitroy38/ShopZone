import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { useCart } from '../../App';
import './ProductDetailsPage.css';

function getStars(r) {
  return '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.floor(r) - (r % 1 >= 0.5 ? 1 : 0));
}

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return (
    <div style={{ textAlign: 'center', padding: '80px 20px' }}>
      <div style={{ fontSize: '3rem' }}>😕</div>
      <h2 style={{ marginTop: 12 }}>Product not found</h2>
      <button className="btn-primary" style={{ marginTop: 20 }} onClick={() => navigate('/products')}>Back to Products</button>
    </div>
  );

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <main className="detail-page page-enter">
      <div className="container">
        <button className="detail-back" onClick={() => navigate(-1)}>← Back</button>

        <div className="detail-grid">
          {/* Image */}
          <div className="detail-image-wrap">
            <img src={product.image} alt={product.name} />
            {product.badge && <span className="badge detail-badge">{product.badge}</span>}
          </div>

          {/* Info */}
          <div className="detail-info">
            <p className="detail-category">{product.category}</p>
            <h1 className="detail-name">{product.name}</h1>

            <div className="detail-rating">
              <span className="stars">{getStars(product.rating)}</span>
              <span style={{ color: 'var(--text-mid)', fontSize: '0.88rem' }}>
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <div className="detail-price-row">
              <span className="detail-price">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <>
                  <span className="detail-original">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="detail-discount">{discount}% OFF</span>
                </>
              )}
            </div>

            <p className="detail-desc">
              Premium quality {product.name.toLowerCase()} crafted for everyday use.
              Fast delivery available. Easy returns within 30 days.
            </p>

            <div className="detail-qty-row">
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-mid)' }}>Quantity</span>
              <div className="qty-control">
                <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(q => q + 1)}>+</button>
              </div>
            </div>

            <div className="detail-actions">
              <button className="btn-primary detail-cart-btn" onClick={handleAddToCart}>
                {added ? '✓ Added to Cart!' : '🛒 Add to Cart'}
              </button>
              <button className="detail-wish-btn">🤍 Wishlist</button>
            </div>

            <div className="detail-perks">
              {['🚚 Free delivery above ₹499', '↩️ 30-day easy returns', '✅ 100% authentic products'].map(p => (
                <span key={p} className="detail-perk">{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div style={{ marginTop: 60 }}>
            <h2 className="section-title" style={{ marginBottom: 24 }}>You may also like</h2>
            <div className="related-grid">
              {related.map(p => (
                <div key={p.id} className="related-card" onClick={() => navigate(`/products/${p.id}`)}>
                  <img src={p.image} alt={p.name} />
                  <div className="related-body">
                    <p className="related-name">{p.name}</p>
                    <p className="related-price">₹{p.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default ProductDetailsPage;
