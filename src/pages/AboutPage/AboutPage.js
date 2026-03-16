import React from 'react';

export default function AboutPage() {
  return (
    <main className="page-enter" style={{ padding: '60px 0', minHeight: '60vh' }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>About Us</p>
        <h1 className="section-title" style={{ marginBottom: 16 }}>We're building the future of shopping</h1>
        <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, fontSize: '1rem', marginBottom: 20 }}>
          ShopZone is a multi-category ecommerce platform designed to bring the best products from across India to your doorstep. From electronics to fashion, beauty to home essentials — we've got it all.
        </p>
        <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, fontSize: '1rem' }}>
          Our mission is simple: make quality products accessible to everyone with a seamless, trustworthy shopping experience. Founded by passionate builders, we're just getting started.
        </p>
        <div style={{ display: 'flex', gap: 32, marginTop: 40, flexWrap: 'wrap' }}>
          {[['50K+', 'Products'], ['1M+', 'Happy Customers'], ['200+', 'Brands'], ['4.8★', 'Avg Rating']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent)' }}>{n}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
