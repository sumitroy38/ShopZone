import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../App';
import { useCart } from '../../App';
import './Header.css';

function Header() {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-logo">
          Shop<span>Zone</span>
        </Link>

        <div className="header-search">
          <input
            type="text"
            placeholder="Search products, brands, categories..."
            onKeyDown={(e) => e.key === 'Enter' && navigate('/products')}
          />
          <button className="header-search-btn" onClick={() => navigate('/products')}>🔍</button>
        </div>

        <div className="header-actions">
          <button className="header-cart" onClick={() => alert('Cart coming soon!')}>
            🛒
            {cartCount > 0 && <span className="header-cart-count">{cartCount}</span>}
          </button>

          {user ? (
            <div className="header-user">
              <div className="header-avatar">{user.name?.[0]?.toUpperCase()}</div>
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>{user.name}</span>
              <button className="header-logout" onClick={logout}>Logout</button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="header-auth-btn header-auth-login">Login</button>
              </Link>
              <Link to="/register">
                <button className="header-auth-btn header-auth-register">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
