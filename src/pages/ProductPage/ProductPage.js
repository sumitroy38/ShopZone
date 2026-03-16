import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import { products } from '../../data/products';
import './ProductPage.css';

const CATEGORIES = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Sports'];
const SORT_OPTIONS = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function ProductPage() {
  const [searchParams] = useSearchParams();
  const initCat = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.find(c => c.toLowerCase() === initCat) || 'All'
  );
  const [sort, setSort] = useState('default');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== 'All') {
      list = list.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));
    }
    if (search.trim()) {
      list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeCategory, sort, search]);

  return (
    <main className="product-page page-enter">
      <div className="container">
        <div className="product-page-header">
          <div>
            <h1 className="section-title">All Products</h1>
            <p className="section-subtitle">{filtered.length} products found</p>
          </div>
          <input
            className="product-search"
            placeholder="🔍  Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="product-page-toolbar">
          {/* Category Tabs */}
          <div className="category-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`cat-tab${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            className="sort-select"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            {SORT_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="product-empty">
            <div style={{ fontSize: '3rem', marginBottom: 12 }}>😕</div>
            <h3>No products found</h3>
            <p>Try a different category or search term</p>
          </div>
        ) : (
          <ProductList products={filtered} />
        )}
      </div>
    </main>
  );
}

export default ProductPage;
