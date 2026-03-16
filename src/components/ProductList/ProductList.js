import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../App';
import './ProductList.css';

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
}

function getDiscount(original, current) {
  return Math.round(((original - current) / original) * 100);
}

function ProductList({ products }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card" onClick={() => navigate(`/products/${product.id}`)}>
          <div className="product-img-wrap">
            <img src={product.image} alt={product.name} loading="lazy" />
            {product.badge && <span className="badge product-badge">{product.badge}</span>}
            <button className="product-wishlist" onClick={e => { e.stopPropagation(); }}>🤍</button>
          </div>
          <div className="product-body">
            <p className="product-name">{product.name}</p>
            <div className="product-rating">
              <span className="stars">{getStars(product.rating)}</span>
              <span className="rating-count">({product.reviews})</span>
            </div>
            <div className="product-price">
              <span className="price-current">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <>
                  <span className="price-original">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="price-discount">{getDiscount(product.originalPrice, product.price)}% off</span>
                </>
              )}
            </div>
            <button className="product-add-btn" onClick={e => { e.stopPropagation(); addToCart(product); }}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
