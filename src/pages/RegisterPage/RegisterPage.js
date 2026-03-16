import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../App';
import '../LoginPage/LoginPage.css';

function RegisterPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Minimum 6 characters';
    if (!form.confirm) errs.confirm = 'Please confirm your password';
    else if (form.confirm !== form.password) errs.confirm = 'Passwords do not match';
    return errs;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    login({ name: form.name, email: form.email });
    navigate('/');
    setLoading(false);
  };

  return (
    <div className="auth-page page-enter">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="auth-logo">Shop<span>Zone</span></div>
          <p className="auth-tagline">Join millions of happy shoppers 🎉</p>
        </div>

        <h2 className="auth-title">Create your account</h2>
        <p className="auth-subtitle">It's free and takes less than a minute</p>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Sumit Kumar"
            value={form.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="password-wrap">
            <input
              type={showPass ? 'text' : 'password'}
              name="password"
              placeholder="Min. 6 characters"
              value={form.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              style={{ paddingRight: 44 }}
            />
            <button className="password-toggle" onClick={() => setShowPass(s => !s)} type="button">
              {showPass ? '🙈' : '👁️'}
            </button>
          </div>
          {errors.password && <p className="form-error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="Re-enter password"
            value={form.confirm}
            onChange={handleChange}
            className={errors.confirm ? 'error' : ''}
          />
          {errors.confirm && <p className="form-error">{errors.confirm}</p>}
        </div>

        <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginBottom: 16 }}>
          By registering, you agree to our <a href="#" style={{ color: 'var(--accent)' }}>Terms</a> and <a href="#" style={{ color: 'var(--accent)' }}>Privacy Policy</a>.
        </p>

        <button className="auth-submit" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Creating account...' : 'Create Account →'}
        </button>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
