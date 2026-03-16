import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <main className="page-enter" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(5rem, 15vw, 9rem)', color: 'var(--accent)', lineHeight: 1, fontWeight: 700 }}>404</div>
        <h2 style={{ fontSize: '1.4rem', marginBottom: 10, color: 'var(--text-dark)' }}>Page not found</h2>
        <p style={{ color: 'var(--text-mid)', marginBottom: 32, maxWidth: 340, margin: '0 auto 32px' }}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button className="btn-primary" onClick={() => navigate('/')}>Go Home</button>
          <button className="btn-outline" onClick={() => navigate('/products')}>Browse Products</button>
        </div>
      </div>
    </main>
  );
}
