import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { to: '/', label: 'Home', icon: '🏠', end: true },
  { to: '/products', label: 'All Products', icon: '📦' },
];

const categoryItems = [
  { label: 'Electronics', icon: '💻' },
  { label: 'Fashion', icon: '👗' },
  { label: 'Home & Living', icon: '🛋️' },
  { label: 'Beauty', icon: '💄' },
  { label: 'Sports', icon: '⚽' },
  { label: 'Books', icon: '📚' },
  { label: 'Toys', icon: '🧸' },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}

        <div className="nav-divider" />

        {categoryItems.map(item => (
          <NavLink
            key={item.label}
            to={`/products?category=${item.label.toLowerCase()}`}
            className="nav-link"
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
