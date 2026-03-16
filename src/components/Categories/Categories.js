import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../data/products';
import './Categories.css';

function Categories() {
  const navigate = useNavigate();
  return (
    <div className="categories-grid">
      {categories.map(cat => (
        <div
          key={cat.name}
          className="category-card"
          onClick={() => navigate(`/products?category=${cat.name.toLowerCase()}`)}
          style={{ borderColor: cat.color + '33' }}
        >
          <div className="category-icon-wrap" style={{ background: cat.bg }}>
            {cat.icon}
          </div>
          <p className="category-name">{cat.name}</p>
          <p className="category-count">{cat.count} products</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
