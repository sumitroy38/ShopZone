import React, { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return alert('Please fill all fields.');
    setSent(true);
  };

  return (
    <main className="page-enter" style={{ padding: '60px 0', minHeight: '60vh' }}>
      <div className="container" style={{ maxWidth: 560 }}>
        <p style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.78rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Contact</p>
        <h1 className="section-title" style={{ marginBottom: 6 }}>Get in touch</h1>
        <p style={{ color: 'var(--text-mid)', marginBottom: 32 }}>We usually respond within 24 hours.</p>

        {sent ? (
          <div style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: 12, padding: '24px', textAlign: 'center', color: '#16a34a' }}>
            <div style={{ fontSize: '2rem', marginBottom: 8 }}>✅</div>
            <h3>Message sent!</h3>
            <p style={{ fontSize: '0.88rem', marginTop: 6 }}>We'll get back to you at {form.email}</p>
          </div>
        ) : (
          <div style={{ background: 'var(--bg-white)', border: '1.5px solid var(--border)', borderRadius: 16, padding: 32, boxShadow: 'var(--shadow-sm)' }}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="How can we help?"
                rows={5}
                value={form.message}
                onChange={e => setForm(f => ({...f, message: e.target.value}))}
                style={{ width: '100%', padding: '13px 16px', border: '2px solid var(--border)', borderRadius: 12, resize: 'vertical', fontFamily: 'var(--font-body)', fontSize: '0.95rem', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <button className="btn-primary" style={{ width: '100%', padding: 13 }} onClick={handleSubmit}>
              Send Message →
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
